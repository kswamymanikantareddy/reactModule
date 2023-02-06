import React from "react";
import PropTypes, { string } from 'prop-types';
import './bs3.css'


export const Body3=({size,element,...props})=>{
    return(
<div className="Body--3"{...props}>
    {element}
</div>
    );
};

Body3.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
    element:string.isRequired,
  };

 