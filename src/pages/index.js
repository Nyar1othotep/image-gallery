import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "./main-page";
import { PaintingDetails } from "./painting-details";

export const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/painting/:paintingId" element={<PaintingDetails />} />

      {/* Тут 404 page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
