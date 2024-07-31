// import React, { useState, useRef } from 'react'
// import './Accordian.css'
// import photo from '../../assets/caret.svg'
// import { useSelector } from 'react-redux';
// import ListItemText from "@mui/material/ListItemText";
// import ListItem from "@mui/material/ListItem";
// import Typography from "@mui/material/Typography";
// import Avatar from "@mui/material/Avatar";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Divider from "@mui/material/Divider";
// import EditComment from "../EditComment"
// import List from "@mui/material/List";

// const Accordian = ({ children, toggleText }) => {

//     const user = useSelector((state) => state.session.user);
//     const userName = user.username;
//     const [expand, setExpansion] = useState('closed')
//     const expandCollapse = () => {
//         if (expand === 'closed') {
//             setExpansion('open')
//         } else {
//             setExpansion('closed')
//         }
//     }
//     return (
//         <div className='accordion-wrapper' cs-state={expand}>
//             <div className='accordion-head' onClick={() => expandCollapse()}>
//                 {toggleText}
//                 <img className='caret-icon' alt='caret icon open close' src={photo} />
//             </div>
//             <div className='accordion-body' >
//                 <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//                     <ListItem alignItems='flex-start'>
//                         <ListItemAvatar>
//                             <Avatar alt='profile-img' />
//                         </ListItemAvatar>
//                         <ListItemText primary={children}
//                             secondary={<>
//                                 <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='text.primary'>

//                                 </Typography>

//                             </>
//                             }
//                         />

//                     </ListItem>
//                 </List>

//             </div>
//         </div>
//     )
// }
// export default Accordian;
