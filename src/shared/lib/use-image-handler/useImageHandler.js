import { useEffect, useRef } from "react";

export const useImageHandler = (imageUrl) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    if (imageElement) {
      imageElement.src = imageUrl;

      return () => {
        imageElement.src = "";
      };
    }
  }, [imageUrl]);

  return [imageRef];
};
