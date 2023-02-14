import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";
import AvatarMolecule from "../AvatarMolecule/AvatarMolecule";
import Image from "../../Atoms/Image/Image";

const PaymentDetails = () => {
  return (
    <>
      <Card sx={{ width: "526", height: "254" ,border:'1px solid #E8E8F7',borderRadius:0}}>
        <CardContent>
        <AvatarMolecule url="./Assests/Vector.png" children1="Payment method" children2="Visa credit ...8845"/>
        <Box sx={{width:20, display:'flex' , alignItems:'center',justifyContent:'center'}}>
        <Image url="./Assests/line.png"/>
        </Box>
        <AvatarMolecule url="./Assests/Three.png" children1="Delivery fees" children2="0.001 BTC"/>
        <Box sx={{width:20, display:'flex' , alignItems:'center',justifyContent:'center'}}>
        <Image url="./Assests/line.png"/>
        </Box>
        <AvatarMolecule url="./Assests/one.png"children1="Deposit to" children2="Bitcoin wallet"/>
        </CardContent>
      </Card>
    </>
  );
};

export default PaymentDetails;
