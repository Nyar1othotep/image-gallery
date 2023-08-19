// Component
import { Image } from "../Image/Image";

// Assets
import imgNotFound from "../../assets/not-found.jpg";

export const ErrorImage = () => {
  return (
    <Image
      image={{ url: imgNotFound, width: 320, height: 320 }}
      alt="Image not found"
    />
  );
};
