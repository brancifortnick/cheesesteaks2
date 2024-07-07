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

  return (
    <Button variant='contained' color='primary' type='submit' onClick={onLogout}>Logout</Button>
  )
};

export default LogoutButton;
