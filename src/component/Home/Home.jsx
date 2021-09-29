import React from "react";
import { Redirect } from "react-router";
function Home({ user, Logout }) {
  return (
    <>
      {!user ? (
        <Redirect from="/" to="login" />
      ) : (
        <div className="welcome">
          <h2>
            Bienvenido, <span>{user.user}</span>
            {console.log(user)}
          </h2>
          <button onClick={Logout}>Cerrar sesión</button>
        </div>
      )}
    </>
  );
}

export default Home;
