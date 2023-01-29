import React from "react";
import PropTypes, { string } from 'prop-types';
import './Body.css'


export const Body=({size,...props})=>{
    return(
<div className="Body--1"{...props}>
Bring Your Human to Work
</div>
    );
};

Body.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
    element:string.isRequired,
  };

 