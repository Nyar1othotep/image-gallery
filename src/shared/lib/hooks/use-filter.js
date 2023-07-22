import { useState } from "react";

const removeEmpty = (object) =>
  Object.fromEntries(Object.entries(object).filter(([_, v]) => v !== ""));

export const useFilter = () => {
  const [value, setValue] = useState({});

  const filterHandler = (val, identifier) => {
    setValue((value) => removeEmpty({ ...value, [identifier]: val }));
  };

  return [value, filterHandler];
};
