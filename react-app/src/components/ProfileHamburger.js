import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/session";
import { NavLink } from "react-router-dom";
import { useHistory } from 'react-router'
import UsersLocations from './UsersLocations.js'
import { Button, Box } from '@mui/material';
import LogoutButton from "./auth/LogoutButton";
import './ProfileHamburger.css'

function ProfileHamburger({ user }) {
    const history = useHistory()
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logoutFunc = (e) => {
        e.preventDefault();
        dispatch(logout())
        history.push('/')
    };

    return (
        <>
            <button className='profile-button' style={ { border: 'none', backgroundColor: 'white', color: '#fb6c45', fontWeight: 500, fontSize: '18px' } } onClick={ openMenu }>
                Profile
            </button>
            { showMenu && (
                <div className='dropdown-container'>
                    <ul className="profile-dropdown">
                        <Button className='user_name'>
                            <NavLink to={ `/users/${user.id}/profile` }>
                                { user.username[0].toUpperCase() +
                                    user.username.slice(1) +
                                    "'s Uploads" }

                            </NavLink>
                        </Button>
                        <LogoutButton user={ user } />

                    </ul >
                </div>
            )
            }
        </>
    );
}

export default ProfileHamburger;