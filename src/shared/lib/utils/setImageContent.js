import { Spinner, ErrorImage } from "../../ui";

export const setImageContent = (
  process = "loading",
  spinner = false,
  className = ""
) => {
  switch (process) {
    case "loading":
      return spinner && <Spinner className={className} />;
    case true:
      return null;
    case false:
      return <ErrorImage />;
    default:
      throw new Error("Unexpected process state");
  }
};
