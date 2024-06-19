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

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-link">
          {user ? (
            <NavLink to="/" exact={true} activeClassName="active">
              <HomeIcon />
            </NavLink>
          ) : null}
        </div>
        <div className="nav-link">
          {user ? (
            <NavLink to="/locations" exact={true}>
              <StorefrontIcon color="primary" fontSize="large" />
            </NavLink>
          ) : null}
        </div>
        {/* <div className='nav-link' activeClassName="active">
          {user ? (
            <NavLink to='/images' exact={true}>
              <Button
                variant='contained'
                color='primary'
                className='all-photos'
              >
                All Images
              </Button>
            </NavLink>
          ) : null}
        </div> */}
        <div className="nav-link">
          {!user ? (
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          ) : null}
        </div>
        <div className="nav-link">
          {!user ? (
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          ) : null}
        </div>

        {!user ? (
          <Button
            variant="contained"
            color="primary"
            className="demo-login"
            onClick={demoLoginButton}
          >
            Demo Login
          </Button>
        ) : null}
        {/* {!user ? (
          <button id="demo-button" onClick={demoLoginButton}>
            Demo
          </button>
        ) : null} */}
        {/* {user ? (
          <button>
            <NavLink to={`/users/${user.id}`}>{`${user.username}` + 's profile'}</NavLink>
          </button>

        ) : null} */}
        <div className='link-location'>
          {user ? (
            <Link to={`/users/${user.id}/new-location`}>
              Add Establishment
            </Link>
          ) : null}
        </div>
        <div className="nav-link">{user ? <LogoutButton /> : null}</div>
      </div>
    </nav >
  );
};

export default NavBar;
