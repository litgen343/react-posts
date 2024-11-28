import React from 'react';
import cl from './MyButton.module.css';

export const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={cl.myButton}>
      {children}
    </button>
  );
};
  