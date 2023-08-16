export const convertObjectToArray = (obj) => {
  return Object.keys(obj).map((key) => {
    return {
      key,
      ...obj[key],
    };
  });
};
