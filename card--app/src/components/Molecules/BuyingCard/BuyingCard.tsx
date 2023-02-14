import TextVariant from "../../Atoms/Typography/TextVariants";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";

const BuyingCard = () => {
  return (
    <>
      <Card sx={{ width: 526, height: 146,border:' 1px solid #E8E8F7',borderRadius:0}}>
        <CardContent>
          <Box sx={{ mx: 53, my: 3, textAlign: "center", width:101,height:16}}>
            <TextVariant
              color="text.secondary"
              variant="caption1"
              children="You are buying"
            />
          </Box>
          <Box sx={{ mx: 44.5, my: 3, textAlign: "center", width:171,height:34 }}>
            <TextVariant color="" variant="h6" children="0.0234510 BTC" />
          </Box>
          <Box sx={{ mx: 48, my: 3, textAlign: "center", width:145,height:16 }}>
            <TextVariant
              color="text.secondary"
              variant="caption1"
              children="1BTC = $3,297,866.84"
            />
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default BuyingCard;
