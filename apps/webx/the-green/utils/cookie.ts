export type Cookie = {
  name: string;
  value: string;
  expires?: Date;
  maxAge?: number;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: string;
};

const isNonEmptyString = (str) => {
  return typeof str === 'string' && !!str.trim();
};

export const parseCookieArray = (setCookieArray: string[]): string => {
  let cookieValue = '';
  setCookieArray
    .map((cookie) => parseCookie(cookie))
    .forEach((cookie) => (cookieValue += `${cookie.name}=${cookie.value};`));
  return cookieValue;
};

export const parseCookie = (setCookieValue: string) => {
  const parts = setCookieValue.split(';').filter(isNonEmptyString);
  const nameValue = parts.shift().split('=');
  const name = nameValue.shift();
  const value = nameValue.join('=');

  const options = {
    decodeValues: true,
    map: false,
    silent: false,
  };

  const cookie: Cookie = {
    name: name,
    value: options.decodeValues ? decodeURIComponent(value) : value,
  };

  parts.forEach((part) => {
    const sides = part.split('=');
    const key = sides.shift().trimLeft().toLowerCase();
    const value = sides.join('=');
    switch (key) {
      case 'expires':
        cookie.expires = new Date(value);
        break;
      case 'max-age':
        cookie.maxAge = parseInt(value, 10);
        break;
      case 'secure':
        cookie.secure = true;
        break;
      case 'httponly':
        cookie.httpOnly = true;
        break;
      case 'samesite':
        cookie.sameSite = value;
        break;
      default:
        cookie[key] = value;
        break;
    }
  });

  return cookie;
};
