import React from "react";
import PropTypes from 'prop-types';
interface InputProps {
    maxLength:number,
    placeholder:string,
    onChange: () => void;
  }

const InputField = ({maxLength,placeholder}:InputProps )=>{
    return(
        <input
        maxLength={maxLength}
        placeholder = {placeholder}
        />
    )
}

InputField.propTypes={
    maxLength:PropTypes.number,
    placeholder:PropTypes.string,
}

export default InputField;