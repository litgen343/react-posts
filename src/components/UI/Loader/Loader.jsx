import React from 'react';
import cl from './Loader.module.css';

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding:  '150px 0px',
      }}
    >
      <div className={cl.loader}></div>
    </div>
  );
};
