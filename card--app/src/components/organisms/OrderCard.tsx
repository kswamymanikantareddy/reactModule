import Card from '@mui/material/Card';
import BuyingCard from '../Molecules/BuyingCard/BuyingCard'
import PaymentDetails from '../Molecules/PaymentDetailsCard/PaymentDetails';
import TotalCard from '../Molecules/TotalCard/TotalCard';

const OrderCard = () => {
  return (
   <>
   <Card sx={{width:527 , height:646,borderRadius:0,border:' 1px solid #E8E8F7'}}>
   <BuyingCard/>
   <PaymentDetails/>
   <TotalCard/>
   </Card>
   </>

  
  )
}

export default OrderCard
