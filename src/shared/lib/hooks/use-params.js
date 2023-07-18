import { useState } from "react";

const removeEmpty = (object) =>
  Object.fromEntries(Object.entries(object).filter(([_, v]) => v !== ""));

export const useParams = () => {
  const [value, setValue] = useState({});

  const paramsHandler = (val, identifier) => {
    setValue((value) => removeEmpty({ ...value, [identifier]: val }));
  };

  return [value, paramsHandler];
};
