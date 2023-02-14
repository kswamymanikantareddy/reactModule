import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";
import OrderSummery from "../OrderSummery/OrderSummery";
import ButtonComponent from "../../Atoms/Button/Button";

const TotalCard = () => {
  return (
    <>
      <Card sx={{ width: 526, height: 270 ,borderTop:'1px solid #E8E8F7',borderRadius:0}}>
        <CardContent>
       <OrderSummery variant1="overline" leftNum="0.0234510 BTC" variant2="overline" rightNum="$34,000.00"/>
       <OrderSummery variant1="Minet Fee" leftNum="0.0234510 BTC" variant2="overline" rightNum="$1,000.00"/>
       <OrderSummery variant1="Total" leftNum="0.0234510 BTC" variant2="body1" rightNum="$35,000.00"/>
       <Box sx={{my:4.8, py:0, px:0, display:'flex',justifyContent:'center'}}>
      <ButtonComponent variant='contained' label="BUY NOW"/>
       </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default TotalCard
