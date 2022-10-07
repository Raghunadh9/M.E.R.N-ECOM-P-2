import React from "react";
import { NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@mui/icons-material/Search";
import Person3Icon from "@mui/icons-material/Person3";
import { useSelector } from "react-redux";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.css";

const Navbar = ({ user }) => {
  const { cartItems } = useSelector((state) => state.cart);

  const { isAuthenticated } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useAlert();
  function dashboard() {
    history.push("/admin/dashboard");
  }
  function cart() {
    history.push("/cart");
  }
  function orders() {
    history.push("/orders");
  }
  function account() {
    history.push("/account");
  }
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }
  return (
    <div className="text-decoration-none">
      <div className="navbar_container text-decoration-none">
        <div className="navbar_wrapper text-decoration-none">
          <div className="navbar_left text-decoration-none">
            <NavLink className="brand_navbar" to="/">
              <h1 className="text-decoration-none">FNPASSION.</h1>
            </NavLink>
          </div>
          <div className="navbar_center text-decoration-none">
            <NavLink activeClassName="nav_ac" to="/">
              <div className="navbar_menuItem text-decoration-none">Home</div>
            </NavLink>
            <NavLink activeClassName="nav_ac" to="/products">
              <div className="navbar_menuItem text-decoration-none">
                Products
              </div>
            </NavLink>
            <NavLink activeClassName="nav_ac" to="/contact">
              <div className="navbar_menuItem text-decoration-none">
                Contact
              </div>
            </NavLink>
            <NavLink activeClassName="nav_ac" to="/about">
              <div className="navbar_menuItem text-decoration-none">About</div>
            </NavLink>
          </div>
          <div className="navbar_right text-decoration-none">
            <div className="navbar_menuItem">
              <NavLink
                className="icon_className text-decoration-none"
                to="/Search"
              >
                <SearchIcon fontSize="medium" />
              </NavLink>
            </div>

            <div className="navbar_menuItem">
              {isAuthenticated ? (
                <div class="dropdown">
                  <a
                    class="btn icon_className btn-sm"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <AccountCircleIcon fontSize="medium" />
                  </a>

                  <ul class="dropdown-menu">
                    <li onClick={account}>
                      <a class="dropdown-item">
                        <AccountCircleIcon /> Account
                      </a>
                    </li>
                    <li onClick={orders}>
                      <a class="dropdown-item">
                        <ListAltIcon /> Orders
                      </a>
                    </li>

                    {user.role === "admin" ? (
                      <li onClick={dashboard}>
                        <a class="dropdown-item">
                          <DashboardIcon /> Dashboard
                        </a>
                      </li>
                    ) : null}
                    <li onClick={cart}>
                      <a class="dropdown-item">
                        <ShoppingCartOutlinedIcon fontSize="small" /> Cart
                        &nbsp; &nbsp;
                        <Badge
                          badgeContent={cartItems.length}
                          color="error"
                        ></Badge>
                      </a>
                    </li>

                    <li onClick={logoutUser}>
                      <a class="dropdown-item">
                        <ExitToAppIcon /> Logout
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <NavLink className="icon_className" to="/Login">
                  <AccountCircleIcon fontSize="medium" />
                </NavLink>
              )}
            </div>
            <div className="navbar_menuItem">
              <NavLink className="icon_className" to="/Cart">
                <Badge
                  badgeContent={
                    cartItems.length === null ? 0 : cartItems.length
                  }
                  color="error"
                >
                  <ShoppingCartOutlinedIcon fontSize="medium" />
                </Badge>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
