import PropTypes from "prop-types";
import { useMemo, useState } from "react";
import cn from "classnames";

import { setImageContent, useImageHandler } from "../../lib";
import { ErrorImage } from "../ErrorImage/ErrorImage";
import styles from "./Image.module.scss";

export const Image = ({
  className = "",
  image = { url: "", width: 0, height: 0 },
  alt = "",
  spinner = false,
  onLoad = () => {},
}) => {
  const [process, setProcess] = useState(image.url ? "loading" : "error");
  const [imageRef] = useImageHandler(image.url);

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
