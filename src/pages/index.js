import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "./main-page";

export const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />

      {/* Тут 404 page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
