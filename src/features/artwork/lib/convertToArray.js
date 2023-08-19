export const convertToArray = (obj) => {
  return Object.keys(obj).map((key) => {
    return {
      key,
      ...obj[key],
    };
  });
};
