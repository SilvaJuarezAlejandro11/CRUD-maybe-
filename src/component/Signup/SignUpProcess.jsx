import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginProcess from "../Login/LoginProcess";

function SignUpProcess() {
  const [user, setUser] = useState({
    user: "",
    name: "",
    surname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  //   const bd = {
  //     alex: {
  //       name: "alex",
  //       password: "123",
  //       email: "123@123.com",
  //     },
  //     hola: {
  //       name: "hola",
  //       password: "123456",
  //       email: "123@123456.com",
  //     },
  //   };
  const Signup = (details) => {
    console.log(details);
    const account = localStorage.setItem("usuarios", details);
    console.log(account);
    if (account) {
      setUser({
        user: "",
      });
      setError("Usuario existente");

      console.log("Usuario existente");
    } else {
      setUser({
        user: details.user,
        name: details.name,
        surname: details.surname,
        email: details.password,
        password: details.email,
      });

      console.log("Registrado");
    }
  };
  return (
    <>
      {user.user !== "" ? (
        <LoginProcess />
      ) : (
        <SignUpForm Signup={Signup} error={error} />
      )}
    </>
  );
}

export default SignUpProcess;
