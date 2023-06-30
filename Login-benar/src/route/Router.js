import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home";
import Login from "../pages/Login.jsx";
import NotFound from "../pages/Notfound";
import Table from "../components/table/table";
import Tablegallery from "../components/table/tablegallery";
import Tablegalleryextra from "../components/table/tablegalleryextra";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<DashboardLayout />}>
          <Route path="jurusan" element={<Table />} />
          <Route path="gallery" element={<Tablegallery />} />
          <Route path="extra" element={<Tablegalleryextra />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
