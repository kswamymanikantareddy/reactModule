import RowMolecule from "./index";
import { data } from "../../../data";
import { useState } from "react";
import { ReactElement } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Watchlist from "../Watchlist/index";
import { isTemplateHead } from "typescript";
interface cardType {
  id: number;
  text1: string;
  text2: string;
  price: string;
  change: string;
  marketcap: string;
  image: string;
  isWatchlisted: boolean;
}
const CryptoTable = () => {
  const [icon, setIcon] = useState<ReactElement>(<StarBorderIcon />);
  const [star, setStar] = useState<boolean>(false);
  const [currData, setCurrData] = useState<cardType[]>(data);
  console.log(currData);
  const addWatchlist = (data: cardType) => {
    const tempData = currData.map((item) => {
      if (item.id === data.id) {
        return { ...item, isWatchlisted: !item.isWatchlisted };
      } else {
        return { ...item };
      }
    });
    setCurrData(tempData);
  };
  return (
    <>
      All Assests
      {data.length &&
        data.map((item) => {
          return (
            <>
              <RowMolecule
                url={item.image}
                variant1="body1"
                variant2="subtitle1"
                children2={item.text2}
                children1={item.text1}
                variantC1="body1"
                variantC2="body1"
                variantC3="body1"
                childrenC1={item.price}
                childrenC2={item.change}
                childrenC3={item.marketcap}
                iconField={icon}
                onClick={() => {
                  addWatchlist(item);
                }}
              />
            </>
          );
        })}
      Watchlist
      {currData.length &&
        currData.map((item) => {
          
              item.isWatchlisted ? (
                <RowMolecule
                  url={item.image}
                  variant1="body1"
                  variant2="subtitle1"
                  children2={item.text2}
                  children1={item.text1}
                  variantC1="body1"
                  variantC2="body1"
                  variantC3="body1"
                  childrenC1={item.price}
                  childrenC2={item.change}
                  childrenC3={item.marketcap}
                  iconField={icon}
                  item={item}
                />
              ) : (
                <> </>
              )
            
        
        })}
    </>
  );
};

export default CryptoTable;
