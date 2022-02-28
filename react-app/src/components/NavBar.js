import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { demoLogin } from "../store/session";
import LogoutButton from "./auth/LogoutButton";
import "./NavBar.css";

const NavBar = () => {

  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.session.user);

  const demoLoginButton = async (e) => {
    e.preventDefault();
    dispatch(demoLogin())
    history.push('/')
  }

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-link">
          {user ? (
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          ) : null}
        </div>
        <div className='nav-link'>
          <NavLink to='/images/' exact={true}>
            Images
          </NavLink>
        </div>
        <div className="nav-link">
          {user ? (
            <NavLink to="/users" exact={true} activeClassName="active">
              Users
            </NavLink>
          ) : null}
        </div>
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
          <button className="demo-login" onClick={demoLoginButton}>
            Demo Login
          </button>
        ) : null}
        {/* {user ? (
        <div className="nav-link">
          <NavLink to={`/users/${user.id}/upload/`}>Upload</NavLink>
        </div>
        ): null} */}
        {/* <li>
          "`${user.username}`'s Profile
          <NavLink to={`/users/${user.id}`}></NavLink>
          </li> */}
        <div className="nav-link">{user ? <LogoutButton /> : null}</div>
      </div>
    </nav>
  );
};

export default NavBar;
