import React, { useState, useEffect } from "react";
import validateInfo from "../../js/validateInfo";

function LoginForm({ Login, error, callback }) {
  const [errors, setErrors] = useState({
    user: "",
    name: "",
    email: "",
    password: "",
  });

  const [details, setDetails] = useState({
    user: "",
    name: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validateInfo(details));
    setIsSubmitting(true);
    Login(details);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting]);

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Iniciar sesión.</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <div className="form-group">
          <label htmlFor="user">Usuario:</label>
          <input
            type="text"
            name="user"
            id="user"
            onChange={(e) => setDetails({ ...details, user: e.target.value })}
            value={details.user}
          />
          {errors.user && <p>{errors.user}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <input type="submit" value="Iniciar sesión" />
        <h3>
          ¿No tiene cuenta?, registrese <a href="/signup">Aquí</a>
        </h3>
      </div>
    </form>
  );
}

export default LoginForm;
