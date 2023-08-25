export const isValidPassword = (password: string): boolean => {
  if (password.length < 8) {
    return false;
  }

  return true;
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailRegex.test(email);
};
