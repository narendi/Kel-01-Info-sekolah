import React from "react";
import Navigation from "../layouts/Navbar";
import Maincontent from "../Maincontent";
import Footer from "../layouts/footer";

function Home() {
  return (
    <React.Fragment>
      <Navigation />
      <Maincontent />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
