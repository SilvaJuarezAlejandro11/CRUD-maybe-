export default function validateInfo(details) {
  let errors = {};

  if (!details.user.trim()) {
    errors.user = "Username required";
  } else if (!/^[A-ZÑa-zñ]/.test(details.user.trim())) {
    errors.user = "Enter a valid user";
  }

  if (!details.name.trim()) {
    errors.name = "name required";
  } else if (!/^[A-ZÑa-zñ]/.test(details.name.trim())) {
    errors.name = "Enter a valid name";
  }

  if (!details.surname) {
    errors.surname = "surname required";
  } else if (!/^[A-ZÑa-zñ]/.test(details.surname.trim())) {
    errors.surname = "Enter a valid surname";
  }

  if (!details.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(details.email)) {
    errors.email = "Email address is invalid";
  }
  if (!details.password) {
    errors.password = "Password is required";
  } else if (details.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!details.password2) {
    errors.password2 = "Password is required";
  } else if (details.password2 !== details.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
