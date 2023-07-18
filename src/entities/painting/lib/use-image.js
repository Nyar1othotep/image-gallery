import { useEffect, useState } from "react";
// Assets
import ImageNotFound from "../ui/painting-card/assets/not-found.jpg";

export const useImage = (image) => {
  const [value, setValue] = useState(image);

  useEffect(() => {
    if (!image) {
      setValue((value) => ImageNotFound);
    }
  }, [image]);

  return [value, setValue];
};
