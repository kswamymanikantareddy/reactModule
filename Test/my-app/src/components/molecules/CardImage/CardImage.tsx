import Image from "../../atoms/Image/Image";
import Box from "@mui/material/Box";

const CardImage = () => {
  return (
    <>
      <Box sx={{ height: 292, width: 294 }}>
        <Image url="./assests/1.svg" />
      </Box>
    </>
  );
};

export default CardImage;
