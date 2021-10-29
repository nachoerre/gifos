//styles
import './Button.css'

//dependecies
import React from 'react';

function Button({
  className,
  children,
  onClick,
  disabled
}) {
  return (
    <button
      type='button'
      className={`btn ${className ? `${className}` : ''}`}
      onClick={onClick}
      disabled={disabled}
      id='btn'
    >
      {children}
    </button>
  );
}

export default Button;