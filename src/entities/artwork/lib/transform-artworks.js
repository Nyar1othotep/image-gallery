const getTitle = (artwork) => artwork.title || "Unknown title";
const getCreationDate = (artwork) =>
  artwork.creation_date || "Unknown creation date";
const getWebImage = (artwork) => {
  if (artwork.images.web.url) {
    return artwork.images.web;
  }
  return null;
};
const getImages = (artwork) => {
  if (Object.keys(artwork.images).length !== 0) {
    return artwork.images;
  }
  return null;
};
const getCreators = (artwork) =>
  artwork.creators[0]?.description || "Unknown author";
const getAccessionNumber = (artwork) =>
  artwork.accession_number || "No accession number";
const getCreditline = (artwork) => artwork.creditline || "Unknown creditline";
const getCulture = (artwork) => artwork.culture[0] || "Unknown culture";
const getTechnique = (artwork) => artwork.technique || "Unknown technique";
const getWallDescription = (artwork) =>
  artwork.wall_description || "No wall description";

export const transformArtworks = (artwork) => {
  const { id } = artwork;
  const title = getTitle(artwork);
  const creation_date = getCreationDate(artwork);
  const image = getWebImage(artwork);
  const creators = getCreators(artwork);

  return { id, title, creation_date, image, creators };
};

export const transformArtwork = (artwork) => {
  const { id } = artwork;
  const title = getTitle(artwork);
  const creation_date = getCreationDate(artwork);
  const images = getImages(artwork);
  const creators = getCreators(artwork);
  const accessionNumber = getAccessionNumber(artwork);
  const creditline = getCreditline(artwork);
  const culture = getCulture(artwork);
  const technique = getTechnique(artwork);
  const wallDescription = getWallDescription(artwork);

  return {
    id,
    title,
    creation_date,
    images,
    creators,
    accessionNumber,
    creditline,
    culture,
    technique,
    wallDescription,
  };
};
