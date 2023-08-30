export const validateEmail = (email) => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email) && email.length <= 35 && email.trim() !== "";
};
  
export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d).{6,10}$/;
    return passwordRegex.test(password);
};
  