import React from "react";
import PropTypes from 'prop-types';
import './Input.css'

const InputField = ({maxLength,placeholder,type})=>{
    return(
        <input
        maxLength={maxLength}
        placeholder = {placeholder}
        type={type}
        />
    )
}

InputField.propTypes={
    maxLength:PropTypes.number,
    placeholder:PropTypes.string,
}

export default InputField;