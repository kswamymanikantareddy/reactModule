import RowMolecule from "./index";
import { data } from "../../../data";
import { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import "./index.css";

import {styled } from '@mui/material/styles';
export interface cardType1 {
  url: string;
  variant1: string;
  variant2: string;
  children2: string;
  children1: string;
  variantC1: string;
  variantC2: string;
  variantC3: string;
  childrenC1: string;
  childrenC2: string;
  childrenC3: string;
  item: any;
  currData?: any;
  setCurrData?: any;
  onClick?: () => any;
  isWatchlisted?: boolean;
}
export interface cardType {
  id: number;
  text1: string;
  text2: string;
  price: string;
  change: string;
  marketcap: string;
  image: string;
  isWatchlisted: boolean;
}
const StyledTab = styled(TabPanel)(()=>{
  return({
    '& .MuiTabPanel':{
      padding:'0 !important',
    }
  })
})
const CryptoTable = () => {
       
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [currData, setCurrData] = useState<cardType[]>(data);
  console.log(currData);
  const addWatchlist = (data: cardType) => {
    const tempData = currData.map((item1) => {
      if (item1.id === data.id) {
        return { ...item1, isWatchlisted: !item1.isWatchlisted };
      } else {
        return { ...item1 };
      }
    });
    setCurrData(tempData);
  };
  const removeWatchlist = (data: cardType) => {
    const tempData = currData.map((item1) => {
      if (item1.id === data.id) {
        return { ...item1, isWatchlisted: !item1.isWatchlisted };
      } else {
        return { ...item1 };
      }
    });
    setCurrData(tempData);
  };

  return (
    <>

        
      <Box sx={{ width: "100%", py:0}}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" , py:0}}>
            <TabList
              onChange={handleChange}
              aria-label="Tabs example"
              textColor="primary"
              indicatorColor="primary"
            >
              <Tab label="All Assests" value="1" />
              <Tab label="Watchlist" value="2" />
            </TabList>
          </Box>
          <StyledTab value="1">
            {currData.length &&
              currData.map((item) => {
                return (
                  <>
                    <RowMolecule
                      url={item.image}
                      variant1="body1"
                      variant2="overline"
                      children2={item.text2}
                      children1={item.text1}
                      variantC1="body2"
                      variantC2="body2"
                      variantC3="body2"
                      childrenC1={item.price}
                      childrenC2={item.change}
                      childrenC3={item.marketcap}
                      onClick={() => {
                        addWatchlist(item);
                      }}
                      currData={currData}
                      setCurrData={setCurrData}
                      item={item}
                    />
                  </>
                );
              })}
          </StyledTab>
          <StyledTab value="2">
            {currData.length &&
              currData.map((item) =>
                item.isWatchlisted ? (
                  <RowMolecule
                    url={item.image}
                    variant1="body1"
                    variant2="overline"
                    children2={item.text2}
                    children1={item.text1}
                    variantC1="body2"
                    variantC2="body2"
                    variantC3="body2"
                    childrenC1={item.price}
                    childrenC2={item.change}
                    childrenC3={item.marketcap}
                    item={item}
                    currData={currData}
                    setCurrData={setCurrData}
                    onClick={() => {
                      removeWatchlist(item);
                    }}
                  />
                ) : (
                  <> </>
                )
              )}
          </StyledTab>
        </TabContext>
      </Box>

    </>
  );
};

export default CryptoTable;
