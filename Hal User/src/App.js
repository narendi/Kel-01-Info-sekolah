import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import Profile from "./component/pages/profile";
import Rpl from "./component/pages/jurusan/rpl";
import Ak from "./component/pages/jurusan/ak";
import "./styles/footer.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="rpl" element={<Rpl />} />
        <Route path="akutansi" element={<Ak />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
