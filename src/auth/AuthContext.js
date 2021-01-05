import React, { createContext, useCallback, useState } from "react";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";

export const AuthContext = createContext();

const initialState = {
  uid: null,
  checking: true,
  logged: false,
  name: null,
  email: null
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialState);

  const login = async (email, password) => {
    const resp = await fetchSinToken("login", { email, password }, "POST");
    if (resp.ok) {
      const { usuario } = resp;
      localStorage.setItem("token", resp.token);
      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        name: usuario.nombre,
        email: usuario.email
      });
    }
    return resp.ok;
  };

  const register = async (nombre, email, password) => {
    const resp = await fetchSinToken(
      "login/new",
      { nombre, email, password },
      "POST"
    );
    if (resp.ok) {
      const { usuario } = resp;
      localStorage.setItem("token", resp.token);
      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        name: usuario.nombre,
        email: usuario.email
      });
      return true;
    }
    return resp.msg;
  };
  const verificaToken = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null
      });
      return false;
    }
    const resp = await fetchConToken("login/renew");
    if (resp.ok) {
      const { usuario } = resp;
      localStorage.setItem("token", resp.token);
      setAuth({
        uid: usuario.uid,
        checking: false,
        logged: true,
        name: usuario.nombre,
        email: usuario.email
      });
      return true;
    } else {
      setAuth({
        uid: null,
        checking: false,
        logged: false,
        name: null,
        email: null
      });
      return false;
    }
  }, []);

  const logout = () => {};
  return (
    <AuthContext.Provider
      value={{ login, register, verificaToken, logout, auth }}
    >
      {children}
    </AuthContext.Provider>
  );
};