import { useSelector } from "react-redux";

// Entities
import { themes } from "features/theme";

export const Logo = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <img
      src={`/image-gallery/images/${
        theme === themes.light ? "logo-black" : "logo-white"
      }.png`}
      alt="logo"
      width="75px"
      height="29px"
    />
  );
};
