import React from "react";
import { NavLink } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@mui/icons-material/Search";
import Person3Icon from "@mui/icons-material/Person3";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="text-decoration-none">
      <div className="navbar_container text-decoration-none">
        <div className="navbar_wrapper text-decoration-none">
          <div className="navbar_left text-decoration-none">
            <NavLink className="brand_navbar" to="/">
              <h1 className="text-decoration-none">FPASSIONN.</h1>
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
              <NavLink className="icon_className" to="/Login">
                <Person3Icon fontSize="medium" />
              </NavLink>
            </div>
            <div className="navbar_menuItem">
              <NavLink className="icon_className" to="/Cart">
                <Badge badgeContent={4} color="error">
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
