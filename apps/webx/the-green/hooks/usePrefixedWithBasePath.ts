import getConfig from 'next/config';

const getBasePath = () => {
  const { publicRuntimeConfig } = getConfig();
  return publicRuntimeConfig.basePath;
};

const usePrefixedWithBasePath = (path: string) => {
  const basePath = getBasePath();
  const remainingPath = path.charAt(0) === '/' ? path : `/${path}`;

  return `${basePath}${remainingPath}`
};

export const useGetBasePath = () => {
  const basePath = getBasePath();
  return `${basePath}`
};


export default usePrefixedWithBasePath;
