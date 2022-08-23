import jsSHA from "jssha";

export const generateHashPassword = (password: string): string => {
  const shaObj = new jsSHA('SHA-256', 'TEXT');
  shaObj.update(password);
  return shaObj.getHash('HEX');
};
