import { useEffect, useState } from "react";

export const useForcePage = (skip, perPage) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue((value) => skip / perPage);
  }, [skip, perPage]);

  return [value, setValue];
};
