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
import Store from "./Store.js";
import { loadUser } from "./actions/userAction";
import Profile from "./Components/User/Profile.js";
import { useSelector } from "react-redux";
import ProtectedRoute from "./Components/Route/ProtectedRoute";
import UpdateProfile from "./Components/User/UpdateProfile.js";
const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Urbanist", "Droid Sans", "Chilanka"],
      },
    });
    Store.dispatch(loadUser());
  }, []);
  return (
    <div>
      <Router>
        {isAuthenticated ? <Navbar user={user} /> : <Navbar />}

        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />
        <Route exact path="/Search" component={Search} />
        <ProtectedRoute exact path="/Account" component={Profile} />
        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

        <Route exact path="/Login" component={LoginSignup} />

        <Footer />
      </Router>
    </div>
  );
};

export default App;
