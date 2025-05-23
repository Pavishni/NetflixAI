export const checkValidation = (name, email, password) => {
  const isNameValid = /^[a-zA-Z\s'-]{2,50}$/.test(name);
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  if (!isNameValid) return "Name is Invalid";
  if (!isEmailValid) return "Email ID is invalid";
  if (!isPasswordValid) return "Password is invalid";
  return null;
};
