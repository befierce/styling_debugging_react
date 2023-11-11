import React from 'react';

import './Button.css';

const Button = props => {
  let isValid = props.isValid;
  return (
    <button type={props.type} className={`button ${!isValid ? 'inValid' : ''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
