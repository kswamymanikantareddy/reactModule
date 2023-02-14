import Box from "@mui/material/Box";
import TextVariant from "../../atoms/TextVariants/TextVariants";
import AvatarMolecule from "../AvatarMolecule/AvatarMolecule";
import Stack from "@mui/material/Stack";
const BookCaptions = () => {
  return (
    <>
      <Box sx={{ height: 90, width: 190 }}>
        <Stack direction="column" spacing={2}>
          <TextVariant variant="" children="Bring Your Human to Work" color="#03314B" />
          <TextVariant variant="" children="Erica Keswin" color="#6D787E"/>

          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <AvatarMolecule
              url="./assests/icon.svg"
              variant=""
              children="13-minute read"
              color='#6D787E'
            />
            <AvatarMolecule
              url="./assests/Vector.svg"
              variant=""
              children="1.9k reads"
              color='#6D787E'
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default BookCaptions;
