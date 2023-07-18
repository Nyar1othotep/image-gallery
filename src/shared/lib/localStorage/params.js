const encode = (value) => JSON.stringify(value);
const decode = (value) => JSON.parse(value);
const get = (key) => localStorage.getItem(key);
const set = (key, value) => localStorage.setItem(key, value);

export const initParams = (value) => {
  if (get("params")) {
    return decode(get("params"));
  } else {
    setParams(value);
    return value;
  }
};

export const getParams = () => {
  return decode(get("params"));
};

export const setParams = (value) => {
  set("params", encode(value));
};
