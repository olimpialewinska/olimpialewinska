export const createQueryString = (path: string, value: string) => {
  const langCodePattern = /^\/[a-z]{2}/;
  const newPath = path.replace(langCodePattern, `/${value}`);
  return newPath;
};
