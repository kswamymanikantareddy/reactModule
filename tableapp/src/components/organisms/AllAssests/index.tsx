import TableCell from "../../atoms/Typography/index";
import AvatarMolecule from "../../molecules/AvatarMolecule/index";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import { ReactElement } from "react";

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
  item
}: any) => {
  const [icon, setIcon] = useState<ReactElement>(<StarBorderIcon />);
  const [star, setStar] = useState<boolean>(false);

  const handleClick = () => {
    if (star) {
      setIcon(<StarBorderIcon />);
      setStar(false);
    } else {
      setIcon(<StarIcon />);
      setStar(true);
    }
  };
  return (
    <>
      <table>
        <tr>
          <td>
            <AvatarMolecule
              url={url}
              variant1={variant1}
              variant2={variant2}
              children1={children1}
              children2={children2}
            />
          </td>
          <td>
            <TableCell variant={variantC1} children={childrenC1} />
          </td>
          <td>
            <TableCell variant={variantC2} children={childrenC2} />
          </td>

          <td>
            <TableCell variant={variantC3} children={childrenC3} />
          </td>
          <span onClick={onClick}>
            <td onClick={handleClick}>{icon}</td>
          </span>
        </tr>
      </table>
    </>
  );
};

export default CryptoCard;
