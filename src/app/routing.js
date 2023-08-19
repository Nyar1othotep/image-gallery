import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "pages/main";
import { ArtworkDetailsPage } from "pages/artwork";

export const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route
        exact
        path="/artwork/:artworkId"
        element={<ArtworkDetailsPage />}
      />

      {/* Тут 404 page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
