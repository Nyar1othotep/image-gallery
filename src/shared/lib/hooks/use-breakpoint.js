import { useEffect, useState } from "react";

export const useBreakpoint = (breakpoint) => {
  const [value, setValue] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const onResize = () => {
      setValue(window.innerWidth <= breakpoint);
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [breakpoint]);

  return [value, setValue];
};
