import React, { useState } from "react";
import Home from "../Home/Home";
import LoginForm from "./LoginForm";
function LoginProcess() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({
    user: "",
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  // const bd = {
  //   alex: {
  //     name: "alex",
  //     password: "123",
  //     email: "123@123.com",
  //   },
  //   hola: {
  //     name: "hola",
  //     password: "123456",
  //     email: "123@123456.com",
  //   },
  // };
  const Login = (details) => {
    details = { ...details };
    console.log(details);
    setUser(details);
    console.log(user);
    // const account = bd[details.user];
    if (
      // (account &&
      //   details.name === account.name &&
      //   details.password === account.password &&
      //   details.email === account.email) ||
      JSON.parse(localStorage.getItem(details.user)) &&
      details.user === JSON.parse(localStorage.getItem(details.user)).user &&
      details.name === JSON.parse(localStorage.getItem(details.user)).name &&
      details.email === JSON.parse(localStorage.getItem(details.user)).email &&
      details.password ===
        JSON.parse(localStorage.getItem(details.user)).password
    ) {
      setIsLogged(true);
      console.log("Logged in");
    } else {
      setIsLogged(false);
      console.log("Details do not match");
      setError("Datos incorrectos, intente con otros datos.");
    }
  };
  const Logout = () => {
    console.log("Cerrar sesión");
    setUser({ user: "" });
    setIsLogged(false);
  };

  return (
    <>
      {isLogged ? (
        <Home user={user} Logout={Logout} />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </>
  );
}

export default LoginProcess;
