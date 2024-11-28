import React, { useContext } from 'react';
import { MyInput } from '../components/UI/input/MyInput';
import { MyButton } from '../components/UI/button/MyButton';
import { AuthContext } from '../context';

export const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div style={{padding: '0 30px'}}>
      <h1>Page for login</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter your login" />
        <MyInput type="password" placeholder="Enter your password" />
        <MyButton>Enter</MyButton>
      </form>
    </div>
  );
};
