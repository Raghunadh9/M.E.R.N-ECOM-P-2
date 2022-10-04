import React, { useState, useEffect } from "react";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer.jsx";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
import UpdatePassword from "./Components/User/UpdatePassword.js";
import ForgotPassword from "./Components/User/ForgotPassword.js";
import ResetPassword from "./Components/User/ResetPassword.js";
import Cart from "./Components/Cart/Cart.js";
import Shipping from "./Components/Shipping/Shipping.js";
import ConfimOrder from "./Components/Cart/ConfimOrder.js";
import Payment from "./Components/Cart/Payment.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./Components/Cart/OrderSuccess.js";
import MyOrders from "./Components/Order/MyOrders.js";
import OrderDetails from "./Components/Order/OrderDetails.js";
import Dashboard from "./Components/admin/Dashboard.js";
import ProductList from "./Components/admin/ProductList.js";
import NewProduct from "./Components/admin/newProduct.js";
import UpdateProduct from "./Components/admin/updateProduct.js";
import axios from "axios";
import OrderList from "./Components/admin/orderList";
import ProcessOrder from "./Components/admin/processOrder";
import UserList from "./Components/admin/UserList";
import UpdateUser from "./Components/admin/UpdateUser";
import ProductReviews from "./Components/admin/ProductReviews";
import NotFound from "./NotFound";
const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Urbanist", "Droid Sans", "Chilanka"],
      },
    });
    Store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <div>
      <Router>
        {isAuthenticated ? <Navbar user={user} /> : <Navbar />}
        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <ProtectedRoute exact path="/process/payment" component={Payment} />
          </Elements>
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:keyword" component={Products} />
          <Route exact path="/Search" component={Search} />
          <ProtectedRoute exact path="/Account" component={Profile} />
          <ProtectedRoute exact path="/me/update" component={UpdateProfile} />
          <ProtectedRoute
            exact
            path="/password/update"
            component={UpdatePassword}
          />
          <Route exact path="/password/forgot" component={ForgotPassword} />
          <Route
            exact
            path="/password/reset/:token"
            component={ResetPassword}
          />
          <Route exact path="/Login" component={LoginSignup} />
          <Route exact path="/Cart" component={Cart} />
          <ProtectedRoute exact path="/shipping" component={Shipping} />

          <ProtectedRoute exact path="/success" component={OrderSuccess} />
          <ProtectedRoute exact path="/orders" component={MyOrders} />

          <ProtectedRoute exact path="/order/confirm" component={ConfimOrder} />
          <ProtectedRoute exact path="/order/:id" component={OrderDetails} />

          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/dashboard"
            component={Dashboard}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/products"
            component={ProductList}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/product"
            component={NewProduct}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/product/:id"
            component={UpdateProduct}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/orders"
            component={OrderList}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/order/:id"
            component={ProcessOrder}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/users"
            component={UserList}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/user/:id"
            component={UpdateUser}
          />
          <ProtectedRoute
            isAdmin={true}
            exact
            path="/admin/reviews"
            component={ProductReviews}
          />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
