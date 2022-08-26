import React from "react";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer.jsx";
import WebFont from "webfontloader";
import Home from "./Components/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Urbanist", "Droid Sans", "Chilanka"],
      },
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
