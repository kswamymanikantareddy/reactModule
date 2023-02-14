import TableCell from "../../atoms/Typography/index";
import AvatarMolecule from "../../molecules/AvatarMolecule/index";
import Box from "@mui/material/Box";
import './index.css'
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { cardType1 } from "./CryptoTable";
const CryptoCard = ({
  url,
  variant1,
  variant2,
  children2,
  children1,
  childrenC1,
  childrenC2,
  childrenC3,
  variantC1,
  variantC2,
  variantC3,
  onClick,
  item,
}: cardType1) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          py: 1.5,
          px: 1.5,
          width: 1239,
          height: 74,
          bgcolor: "#FFFFFF",
          border: "1px solid #E8E8F7",
          borderRadius: 1,
          mb:1.5
        }}
      >
        <Box
          sx={{
            width: 300,
            height: 42,

          }}
        >
          <AvatarMolecule
            url={url}
            variant1={variant1}
            variant2={variant2}
            children1={children1}
            children2={children2}
          />
        </Box>
        <Box
          sx={{
            width: 300,
            height: 42,
          }}
        >
          <TableCell variant={variantC1} children={childrenC1} />
        </Box>
        <Box
          sx={{
            width: 300,
            height: 42,
          }}
        >
          <TableCell variant={variantC2} children={childrenC2} />
        </Box>
        <Box
          sx={{
            width: 300,
            height: 42,
          }}
        >
          <TableCell variant={variantC3} children={childrenC3} />
        </Box>
        <Box
          sx={{
            width: 300,
            height: 42,
          }}
        >
          <span onClick={onClick}>
            {item.Watchlist ? (
              <StarBorderIcon />
            ) : item.isWatchlisted === true ? (
              <StarIcon />
            ) : (
              <StarBorderIcon />
            )}
          </span>
        </Box>
      </Box>
    </>
  );
};

export default CryptoCard;
