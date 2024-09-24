// Accordion.js
import React, { useState } from 'react';
import './Accordion.css';
import photo from '../assets/caret.svg';
import { useSelector } from 'react-redux';
import { ListItemText, ListItem, Typography, Avatar, ListItemAvatar, List, Box } from '@mui/material';
// import EditComment from './EditComment';
// import DeleteComment from './DeleteComment';

import AddComments from './AddComments';
const Accordion = ({ children, toggleText }) => {
    const user = useSelector((state) => state.session.user);
    const [expand, setExpansion] = useState('closed');

    const expandCollapse = () => {
        setExpansion(expand === 'closed' ? 'open' : 'closed');
    };

    return (
        <div className='accordion-wrapper' cs-state={expand}>
            <div className='accordion-head' onClick={expandCollapse}>
                <Typography>{toggleText}</Typography>
                <img className='caret-icon' alt='caret icon open close' src={photo} />
            </div>
            <div className='accordion-body'>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems='flex-start'>
                        <ListItemAvatar>
                            {/* <Avatar alt='profile-img' /> */}
                        </ListItemAvatar>
                        <ListItemText
                            primary={children}

                            secondary={
                                <Typography
                                    sx={{ display: 'flex' }}
                                    component='div'
                                    variant='body2'
                                    color='text.primary'
                                >


                                    {/* Any additional text or content */}
                                </Typography>
                            }
                        />
                    </ListItem>
                </List>
            </div>
        </div>
    )
};

export default Accordion;
