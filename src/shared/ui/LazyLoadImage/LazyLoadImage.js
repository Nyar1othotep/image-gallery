import PropTypes from "prop-types";
import { useState } from "react";

import { useBreakpoint } from "../../lib";
import { Image } from "../Image/Image";
import { ErrorImage } from "../ErrorImage/ErrorImage";

export const LazyLoadImage = ({
  image = { url: "", width: 0, height: 0 },
  preview = { url: "", width: 0, height: 0 },
  alt = "",
}) => {
  const [isSmallView] = useBreakpoint(767);
  const [loaded, setLoaded] = useState(false);

  const onImageLoad = () => {
    setLoaded((loaded) => true);
  };

  if (!image.url || !preview.url) return <ErrorImage />;

  return (
    <>
      {!isSmallView && <Image image={image} alt={alt} onLoad={onImageLoad} />}

      {!loaded || isSmallView ? (
        <Image image={preview} alt={alt} spinner={true} />
      ) : null}
    </>
  );
};

LazyLoadImage.propTypes = {
  image: PropTypes.object.isRequired,
  preview: PropTypes.object.isRequired,
  alt: PropTypes.string,
};
