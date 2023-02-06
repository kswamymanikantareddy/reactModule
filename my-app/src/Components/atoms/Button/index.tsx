import React from 'react';
import './index.css';

interface ButtonProps {
  size?: 'btnOne' | 'btnTwo' | 'btnThree'|'btnFour' | 'btnFive' | 'btnSix'|'btnSeven';
  variant:'button'|'orange'|'grey'|'pink'|'lightgrey'|'blue'|'drakgrey'|'beige'
  label: string;
  onClick?: () => void;
}

export const Button = ({
  label,
  size,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`button ${variant}`}
      {...props}
    >
      {label}
    </button>
  );
};
