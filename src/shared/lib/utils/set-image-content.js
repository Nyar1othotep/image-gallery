import { Spinner, ErrorImage } from "../../ui";

export const setImageContent = (
  process = "loading",
  spinner = false,
  className = ""
) => {
  switch (process) {
    case "loading":
      return spinner && <Spinner className={className} />;
    case "loaded":
      return null;
    case "error":
      return <ErrorImage />;
    default:
      throw new Error("Unexpected process state");
  }
};
