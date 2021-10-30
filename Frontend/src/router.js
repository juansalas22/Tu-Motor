import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { Login } from "./componentes/login/Login";
import { Registro } from "./componentes/producto/registro/Registro";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Gestion } from "./componentes/producto/gestion/Gestion";

import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login } from "./actions/auth";


export const Routers = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Cargando...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/"
            component={Login}
            isAuthenticated={isLoggedIn}
          />

          <PrivateRoute
            exact
            path="/registro"
            component={Registro}
            isAuthenticated={isLoggedIn}
          />

          <PrivateRoute
            exact
            path="/gestion"
            component={Gestion}
            isAuthenticated={isLoggedIn}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
