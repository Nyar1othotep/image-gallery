import PropTypes from "prop-types";
import { useEffect, useMemo, useRef, useState } from "react";
import cn from "classnames";

// Lib
import { setImageContent } from "../../../lib";

// Component
import { ErrorImage } from "../error-image/error-image";

// Styles
import styles from "./image.module.scss";

export const Image = ({
  className = "",
  image = { url: "", width: 0, height: 0 },
  alt = "",
  spinner = false,
  onLoad = () => {},
}) => {
  const [process, setProcess] = useState(image.url ? "loading" : "error");
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    if (imageElement) {
      imageElement.src = image.url;

      return () => {
        imageElement.src = "";
      };
    }
  }, [image.url]);

  const onImageLoad = () => {
    setProcess((process) => "loaded");
    onLoad();
  };

  const onImageError = () => {
    setProcess((process) => "error");
  };

  const imageState = useMemo(() => {
    return setImageContent(process, spinner, styles.spinner);
    // eslint-disable-next-line
  }, [process]);

  if (!image.url) return <ErrorImage />;

  return (
    <>
      {imageState}
      <img
        ref={imageRef}
        className={cn({ [styles.root]: process !== "loaded" }, className)}
        alt={alt}
        width={image.width + "px"}
        height={image.height + "px"}
        onLoad={onImageLoad}
        onError={onImageError}
      />
    </>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  image: PropTypes.object.isRequired,
  alt: PropTypes.string,
  onLoad: PropTypes.func,
};
