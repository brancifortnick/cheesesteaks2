// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// // import { makeStyles } from '@mui/styles/makeStyles';
// import akeStyles from '@mui/styles/makeStyles';
// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { NavLink, useHistory, Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { demoLogin } from "../store/session";
// import LogoutButton from "./auth/LogoutButton";
// import LoginIcon from '@mui/icons-material/Login';

// import "./NavBar.css";
// import StorefrontIcon from '@mui/icons-material/Storefront';
// import HomeIcon from './HomeIcon'
// const useStyles = makeStyles((theme) => ({
//     navBar: {
//         backgroundColor:
//             '#black', // Background color from site
//     },
//     navLinks: {
//         color: '#fb6c45', // Link color
//         '&:hover': {
//             color: '#HOVER_HEX_CODE', // Hover effect for links
//         },
//     },
// }));

// const NavBar = () => {
//     const classes = useStyles();

//     return (
//         <AppBar position="static" className={classes.navBar}>
//             <Toolbar>
//                 <Typography variant="h6" style={{ flexGrow: 1 }}>
//                     Steak Out
//                 </Typography>
//                 <Button className={classes.navLinks}> <NavLink to="/" exact={true} >
//                     <HomeIcon color="disabled" sx={{ color: '#fb6c45' }} />
//                 </NavLink></Button>
//                 <Button className={classes.navLinks}>Link 2</Button>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default NavBar;
