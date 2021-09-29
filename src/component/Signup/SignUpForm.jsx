import React, { useState, useEffect } from "react";
import validateUser from "../../js/validateUser";

function SignUpForm({ Signup, error, callback }) {
  const [errors, setErrors] = useState({
    user: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    password2: "",
  });
  const [details, setDetails] = useState({
    user: "",
    name: "",
    surname: "",
    email: "",
    password: "",
    password2: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(validateUser(details));
    setIsSubmitting(true);
    Signup(details);
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [callback, errors, isSubmitting]);

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Registrar.</h2>
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
          <label htmlFor="surname">Apellido paterno:</label>
          <input
            type="surname"
            name="surname"
            id="surname"
            onChange={(e) =>
              setDetails({ ...details, surname: e.target.value })
            }
            value={details.surname}
          />
          {errors.surname && <p>{errors.surname}</p>}
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
        </div>
        {errors.email && <p>{errors.email}</p>}
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
        <div className="form-group">
          <label htmlFor="password2">Confirmar contraseña:</label>
          <input
            type="password"
            name="password2"
            id="password2"
            onChange={(e) =>
              setDetails({ ...details, password2: e.target.value })
            }
            value={details.password2}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <input type="submit" value="Registrarse" />
        <h3>
          ¿Tiene cuenta?, inicie sesión <a href="/login">Aquí</a>
        </h3>
      </div>
    </form>
  );
}

export default SignUpForm;
