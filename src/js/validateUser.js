export default function validateUser(details) {
  let errors = {};
  if (!details.user.trim()) {
    errors.user = "Se requiere usuario.";
    document.getElementById("user").focus();
  } else if (!/^[A-ZÑa-zñ]/.test(details.user.trim())) {
    errors.user = "Ingrese un usuario valido";
    document.getElementById("user").focus();
  } else {
    if (
      localStorage.getItem(details.user) &&
      details.user === JSON.parse(localStorage.getItem(details.user)).user
    ) {
      document.getElementById("user").focus();
      errors.user = "El usuario existe en la plataforma.";
    } else {
      errors.user = "!El usuario no existe¡, puede usarlo.";
    }
  }

  if (!details.name.trim()) {
    errors.name = "Se requiere un nombre.";
    document.getElementById("name").focus();
  } else if (!/^[A-ZÑa-zñ]/.test(details.name.trim())) {
    errors.name = "Ingrese un nombre valido.";
    document.getElementById("name").focus();
  }

  if (!details.surname) {
    errors.surname = "Se requiere apellido paterno.";
    if (document.getElementById("surname")) {
      document.getElementById("surname").focus();
    }
  } else if (!/^[A-ZÑa-zñ]/.test(details.surname.trim())) {
    errors.surname = "Ingrese un apellido paterno valido.";
    if (document.getElementById("surname")) {
      document.getElementById("surname").focus();
    }
  }

  if (!details.email) {
    errors.email = "Se requiere email.";
    document.getElementById("email").focus();
  } else if (!/\S+@\S+\.\S+/.test(details.email)) {
    errors.email = "Ingrese un correo electronico valido.";
    document.getElementById("email").focus();
  }
  if (!details.password) {
    errors.password = "Se requiere contraseña.";
    document.getElementById("password").focus();
  } else if (details.password.length < 6) {
    errors.password = "La contraseña debe ser al menos 6 caracteres.";
    document.getElementById("password").focus();
  }

  if (!details.password2) {
    errors.password2 = "Se requiere confirmar contraseña";
    if (document.getElementById("password2")) {
      document.getElementById("password2").focus();
    }
  } else if (details.password2 !== details.password) {
    errors.password2 = "Las contraseñas no concuerdan";
    if (document.getElementById("password2")) {
      document.getElementById("password2").focus();
    }
  }
  return errors;
}
