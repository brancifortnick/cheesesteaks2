import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', mt: 0.5 }}>
    <Button variant='contained' color='primary' type='submit'>Logout</Button>
  </Box>
};

export default LogoutButton;
