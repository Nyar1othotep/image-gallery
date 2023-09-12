import { Image } from "../Image/Image";

export const ErrorImage = () => {
  return (
    <Image
      image={{
        url: "/image-gallery/images/not-found.jpg",
        width: 320,
        height: 320,
      }}
      alt="Image not found"
    />
  );
};
