export const transformPainting = (painting) => {
  return {
    id: painting.id,
    title: getTitle(painting),
    creation_date: getCreationDate(painting),
    images: getImages(painting),
    creators: getCreators(painting),
  };
};

const getTitle = (painting) => (painting && painting.title) || "Unknown title";
const getCreationDate = (painting) =>
  (painting && painting.creation_date) || "Creation date unknown";
const getImages = (painting) => (painting && painting.images) || false;
const getCreators = (painting) =>
  (painting && painting.creators[0]?.description) || "Unknown author";
