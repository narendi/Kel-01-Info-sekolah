import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import Profile from "./component/pages/profile";
import Gallery from "./component/Gallery";
import Rpl from "./component/pages/jurusan/rpl";
import Ak from "./component/pages/jurusan/ak";
import Bank from "./component/pages/jurusan/bank";
import TKRO from "./component/pages/jurusan/tkr";
import TBSM from "./component/pages/jurusan/tbsm";
import Elind from "./component/pages/jurusan/elind";
import "./styles/footer.css";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="rpl" element={<Rpl />} />
          <Route path="akutansi" element={<Ak />} />
          <Route path="bank" element={<Bank />} />
          <Route path="Elind" element={<Elind />} />
          <Route path="TKRO" element={<TKRO />} />
          <Route path="TBSM" element={<TBSM />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
