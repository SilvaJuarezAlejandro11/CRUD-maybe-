import React, { useState } from "react";
import LoginForm from "./LoginForm";
function LoginProcess() {
  const [user, setUser] = useState({
    user: "",
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const bd = {
    alex: {
      name: "alex",
      password: "123",
      email: "123@123.com",
    },
    hola: {
      name: "hola",
      password: "123456",
      email: "123@123456.com",
    },
  };
  const Login = (details) => {
    console.log(details);
    const account = bd[details.user];
    console.log(account);
    if (
      account &&
      details.name === account.name &&
      details.password === account.password &&
      details.email === account.email
    ) {
      setUser({
        user: details.user,
        name: details.name,
        email: details.password,
        password: details.email,
      });
      console.log("Logged in");
    } else {
      setUser({
        user: "",
      });
      console.log("Details do not match");
      setError("Details do not match!");
    }
  };
  const Logout = () => {
    console.log("Logout");
    setUser({ user: "" });
  };

  return (
    <>
      {user.user !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.user}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </>
  );
}

export default LoginProcess;
