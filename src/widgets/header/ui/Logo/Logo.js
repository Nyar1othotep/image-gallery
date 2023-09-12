// Entities
import { useTheme, themes } from "entities/theme";

export const Logo = () => {
  const theme = useTheme();

  return (
    <img
      src={`/image-gallery/images/${
        theme === themes.light ? "logo-black.png" : "logo-white.png"
      }`}
      alt="logo"
    />
  );
};
