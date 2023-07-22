// Component
import { Image } from "../image/image";

// Assets
import imgNotFound from "../../../assets/not-found.jpg";

export const ErrorImage = () => {
  return (
    <Image
      image={{ url: imgNotFound, width: 320, height: 320 }}
      alt="Image not found"
    />
  );
};
