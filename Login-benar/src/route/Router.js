import { Route, Routes } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Home from "../pages/Home";
import Login from "../pages/Login.jsx";
import Jurusan from "../components/table/jurusan";
import Guru from "../components/table/guru";
import KepSek from "../components/table/kepalasekolah";
import Extrakulikuler from "../components/table/extrakulikuler";
import Profil from "../pages/Profil";
import Slide from "../components/table/slider";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<DashboardLayout />}>
          <Route path="jurusan" element={<Jurusan />} />
          <Route path="guru" element={<Guru />} />
          <Route path="slide" element={<Slide />} />
          <Route path="kpl" element={<KepSek />} />
          <Route path="extra" element={<Extrakulikuler />} />
          <Route path="profil" element={<Profil />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
