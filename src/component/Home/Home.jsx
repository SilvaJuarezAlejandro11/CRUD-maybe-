import React from "react";
function Home({ user, Logout }) {
  return (
    <div className="welcome">
      <h2>
        Bienvenido, <span>{user.user}</span>
        {console.log(user)}
      </h2>
      <button onClick={Logout}>Cerrar sesión</button>
    </div>
  );
}

export default Home;
