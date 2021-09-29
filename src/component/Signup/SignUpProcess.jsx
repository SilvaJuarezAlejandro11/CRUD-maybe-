import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginProcess from "../Login/LoginProcess";

function SignUpProcess() {
  const [isCorrect, setIsCorrect] = useState(false);
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

  const Signup = (details, errors) => {
    console.log(details);
    // if (
    //   localStorage.getItem(details.user) ||
    //   { details } === JSON.parse(localStorage.getItem(details.user))
    // ) {
    //   setIsCorrect(false);
    //   setError("Usuario existente");
    //   document.getElementById("user").focus();
    // }
    if (
      details.user !== "" &&
      details.name !== "" &&
      details.surname !== "" &&
      details.email !== "" &&
      details.password !== "" &&
      details.password2 !== ""
    ) {
      if (
        localStorage.getItem(details.user) &&
        details.user === JSON.parse(localStorage.getItem(details.user)).user
      ) {
        setIsCorrect(false);
        setError("Usuario existente");
      } else {
        localStorage.setItem(details.user, JSON.stringify(details));
        setIsCorrect(true);
        console.log("Registrado");
      }
    } else {
      setIsCorrect(false);
      setError("Faltan datos");
      console.log("Faltan datos");
    }
  };
  return (
    <>
      {isCorrect ? (
        <LoginProcess {...alert("Registro exitoso. Inicie sesión")} />
      ) : (
        <SignUpForm Signup={Signup} error={error} />
      )}
    </>
  );
}

export default SignUpProcess;
