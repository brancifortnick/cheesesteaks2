import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { demoLogin } from "../store/session";
import LogoutButton from "./auth/LogoutButton";
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import "./NavBar.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import HomeIcon from './HomeIcon'
const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  // const { userId } = useParams();
  const demoLoginButton = async (e) => {
    e.preventDefault();
    dispatch(demoLogin());
    history.push("/");
  };

  const currentPath = window.location.pathname;
  console.log(currentPath, "currentPath coming from navbar component")
  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-link">
          {user ? (
            <NavLink to="/" exact={true} >
              <HomeIcon color="disabled" sx={{ color: '#fb6c45' }} />
            </NavLink>
          ) : null}
        </div>
        <div className="nav-link">
          {user ? (
            <NavLink to="/locations" exact={true}>
              <StorefrontIcon color="disabled" sx={{ color: '#fb6c45' }} fontSize="large" />
            </NavLink>
          ) : null}
        </div>
        {/* <div className="nav-link">
          {currentPath === '/sign-up' ? (
            <NavLink to="/login" exact={true} >
              Login
            </NavLink>
          ) : null}
        </div> */}
        <div className="nav-link">
          {!user ? (
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up

            </NavLink>
          ) : null}
        </div>
        <div className='link-location' >
          {!user ? (
            <Button style={{ backgroundColor: '#fb6c45', color: 'white' }}
              variant="contained"

              className="demo-login"
              onClick={demoLoginButton}
            >
              Guest Login
            </Button>
          ) : null}
        </div>
        <div className="nav-link">
          {user ? (
            <div className="users-profile">
              <NavLink to={`/users/${user.id}/profile`} exact={true}>
                {user.username[0].toUpperCase() + user.username.slice(1) + "'s Profile"}
              </NavLink>
            </div>
          ) : null}
        </div>
        <div className='nav-link' >
          {user ? (
            <NavLink to={`/users/${user.id}/new-location`}>
              Add a Spot
            </NavLink>
          ) : null}
        </div>
        <div className="nav-link">{user ? (<div className='logout-btn'><LogoutButton /> </div>) : null}
        </div>
      </div >
    </nav>
  );
};
export default NavBar;
