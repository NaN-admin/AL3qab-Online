import React, { createContext } from "react";
import users from "../login/json/users.json";

export const InputInf = createContext();

export const InputInfProvider = (props) => {

  const [isLogin, setIsLogin] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const get = (whatIGet) => {
    const a = users.filter((user) => {
      if (
        (user.email === email && user.password === password) ||
        (user.username === email && user.password === password)
      ) {
        return true;
      } else {
        return false;
      }
    });
    return a[0][whatIGet];
  };
  const logOut = () => {
    setIsLogin(false);
    setEmail("");
    setPassword("");
  };
  return (
    <InputInf.Provider
      value={{
        isLogin,
        setIsLogin,
        email,
        setEmail,
        password,
        setPassword,
        get,
        logOut,
      }}
    >
      {props.children}
    </InputInf.Provider>
  );
};
