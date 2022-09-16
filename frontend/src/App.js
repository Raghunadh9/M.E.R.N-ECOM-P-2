import React from "react";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer.jsx";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductDetails from "./Components/Product/ProductDetails.js";
import Products from "./Components/Product/Products.js";
import Home from "./Components/Home/Home.jsx";
import Search from "./Components/Product/Search.js";
import LoginSignup from "./Components/User/LoginSignup";
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
      <Router>
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Login" component={LoginSignup} />

        <Footer />
      </Router>
    </div>
  );
};

export default App;
