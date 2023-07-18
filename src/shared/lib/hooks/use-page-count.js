import { useEffect, useState } from "react";

export const usePageCount = (total, perPage) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (perPage !== 0) {
      setValue((value) => Math.ceil(total / perPage));
    } else {
      setValue((value) => 0);
    }
  }, [total, perPage]);

  return [value, setValue];
};
