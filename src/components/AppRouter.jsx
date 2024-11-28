import React, { useContext } from 'react';
import { publicRoutes, privateRoutes } from '../router/index';
import { Routes, Route } from 'react-router-dom';
import { AuthContext } from '../context';
import { Loader } from './UI/Loader/Loader';

export const AppRouter = () => {
  const { isAuth, setIsAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              exact={route.exact}
              path={route.path}
              element={route.element}
              key={route.path}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              exact={route.exact}
              path={route.path}
              element={route.element}
              key={route.path}
            />
          ))}
    </Routes>
  );
};
