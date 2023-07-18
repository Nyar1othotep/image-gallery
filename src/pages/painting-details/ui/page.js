import { useParams } from "react-router-dom";

// Shared
import { typicodeApi } from "shared/api";
import { Spinner } from "shared/ui";
import { messages } from "shared/model";

export const PaintingDetails = () => {
  const { paintingId } = useParams();
  const {
    data = {},
    isFetching,
    isError,
  } = typicodeApi.useGetPaintingQuery(paintingId);

  const { data: painting = {} } = data;

  if (isFetching) return <Spinner />;

  if (isError)
    return <h3 className="center-text">{messages.errorMessage.value}</h3>;

  // Доделать и не забыть про слот фичи для paintingFull
  return (
    <div data-testid="painting">
      <img
        src={painting.image}
        style={{ maxWidth: "100%" }}
        alt={painting.title}
      />
    </div>
  );
};
