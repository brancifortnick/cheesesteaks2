import React, { } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { demoLogin } from "../store/session";
import LogoutButton from "./auth/LogoutButton";
import Button from "@mui/material/Button";
import "./NavBar.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HomeIcon from "./HomeIcon";
import ProfileHamburger from "./ProfileHamburger";
import Footer from './Footer';


const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const demoLoginButton = async (e) => {
    e.preventDefault();
    dispatch(demoLogin());
    history.push("/");
  };

  return (
    <div className="nav-bar">
      <div className="nav-container">
        {/* Brand/Logo Section */}
        <div className="nav-brand">
          {user ? (
            <NavLink to="/" exact={true}>
              <HomeIcon sx={{ color: "#fb6c45", fontSize: "1.8rem" }} />
              <span>SteakOut</span>
            </NavLink>
          ) : (
            <NavLink to="/login" exact={true}>
              <HomeIcon sx={{ color: "#fb6c45", fontSize: "1.8rem" }} />
              <span>SteakOut</span>
            </NavLink>
          )}
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          {user ? (
            <>
              <div className="nav-link">
                <NavLink to="/locations" exact={true}>
                  <StorefrontIcon sx={{ fontSize: "1.2rem" }} />
                  Locations
                </NavLink>
              </div>
              <div className="nav-link">
                <NavLink to={`/users/${user.id}/new-location`}>
                  Add a Spot
                </NavLink>
              </div>
            </>
          ) : (
            <>
                <div className="nav-link">
                  <NavLink to="/sign-up" exact={true} activeClassName="active">
                    Sign Up
                  </NavLink>
                </div>
                <div className="nav-link">
                  <NavLink to="/login" exact={true} activeClassName="active">
                    Login
                  </NavLink>
                </div>
                <div className="link-location">
                  <Button
                    sx={{
                      fontWeight: 600,
                      backgroundColor: "#fb6c45",
                      color: "white",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#e55a39",
                        color: "white"
                      }
                    }}
                    variant="contained"
                    className="demo-login"
                    onClick={demoLoginButton}
                  >
                    Guest Login
                  </Button>
              </div>
            </>
          )}
        </div>

        {/* User Profile Section */}
        <div className="users-profile">
          {user && <ProfileHamburger user={user} />}
        </div>
      </div>
    </div>
  );
};
export default NavBar;