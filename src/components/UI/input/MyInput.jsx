import React from 'react';
import cl from './MyInput.module.css';

export const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} className={cl.MyInput} {...props} type="text" />;
});
