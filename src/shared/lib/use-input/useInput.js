import { useState } from "react";

export const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);

  const handleChange = (e) => {
    setValue((value) => e.target.value);
  };
  const handleBlur = (e) => {
    setValue((value) => e.target.value.trim());
  };
  const handelClear = () => {
    setValue((value) => "");
  };

  return [value, setValue, handleChange, handleBlur, handelClear];
};
