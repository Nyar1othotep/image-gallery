const getTitle = (painting) => painting.title || "Unknown title";
const getCreationDate = (painting) =>
  painting.creation_date || "Unknown creation date";
const getWebImage = (painting) => painting.images.web.url || null;
const getPrintImage = (painting) => painting.images.print.url || null;
const getFullImage = (painting) => painting.images.full.url || null;
const getCreators = (painting) =>
  painting.creators[0]?.description || "Unknown author";
const getAccessionNumber = (painting) =>
  painting.accession_number || "No accession number";
const getCreditline = (painting) => painting.creditline || "Unknown creditline";
const getCulture = (painting) => painting.culture[0] || "Unknown culture";
const getTechnique = (painting) => painting.technique || "Unknown technique";
const getWallDescription = (painting) =>
  painting.wall_description || "No wall description";

export const transformPaintings = (painting) => {
  const { id } = painting;
  const title = getTitle(painting);
  const creation_date = getCreationDate(painting);
  const image = getWebImage(painting);
  const creators = getCreators(painting);

  return { id, title, creation_date, image, creators };
};

export const transformPainting = (painting) => {
  const { id } = painting;
  const title = getTitle(painting);
  const creation_date = getCreationDate(painting);
  const image = getPrintImage(painting);
  const fullImage = getFullImage(painting);
  const creators = getCreators(painting);
  const accessionNumber = getAccessionNumber(painting);
  const creditline = getCreditline(painting);
  const culture = getCulture(painting);
  const technique = getTechnique(painting);
  const wallDescription = getWallDescription(painting);

  return {
    id,
    title,
    creation_date,
    image,
    fullImage,
    creators,
    accessionNumber,
    creditline,
    culture,
    technique,
    wallDescription,
  };
};
