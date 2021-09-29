export default function validateInfo(details) {
  let errors = {};
  if (!details.user.trim()) {
    errors.user = "Se requiere usuario.";
    document.getElementById("user").focus();
  } else if (!/^[A-ZÑa-zñ]/.test(details.user.trim())) {
    errors.user = "Ingrese un usuario valido.";
    document.getElementById("user").focus();
  } else {
    if (
      localStorage.getItem(details.user) &&
      details.user === JSON.parse(localStorage.getItem(details.user)).user
    ) {
      errors.user = "¡El usuario existe en la plataforma!.";
    } else {
      document.getElementById("user").focus();
      errors.user = "El usuario no existe en la plataforma.";
    }
  }

  if (!details.name.trim()) {
    errors.name = "Se requiere nombre.";
    document.getElementById("name").focus();
  } else if (!/^[A-ZÑa-zñ]/.test(details.name.trim())) {
    errors.name = "Ingrese un nombre valido.";
    document.getElementById("name").focus();
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
    errors.password = "La contraseña debe tener al menos 6 caracteres.";
    document.getElementById("password").focus();
  }
  return errors;
}
