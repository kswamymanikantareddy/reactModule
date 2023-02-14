import React from "react";
import TableCell from "../../atoms/Typography";
import AvatarMolecule from "../AvatarMolecule/index";
import './index.css'


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
  icon
}: any) => {
  
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
      </tr>
      </table>
    </>
  );
};

export default CryptoCard;
