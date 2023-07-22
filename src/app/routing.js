import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "pages/main-page";
import { PaintingDetailsPage } from "pages/painting-details-page";

export const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route
        exact
        path="/painting/:paintingId"
        element={<PaintingDetailsPage />}
      />

      {/* Тут 404 page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
