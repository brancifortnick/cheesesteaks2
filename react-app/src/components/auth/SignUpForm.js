import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './SignUpForm.css';
const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='outter-signup-container'>
      <form onSubmit={onSignUp}>

        <div className='form-container-sign-up'>
          <label><br></br></label>
          <TextField
            placeholder='Username'
            type='text'
            name='username'
            onChange={updateUsername}
            value={username}
          />
          <label><br></br></label>
          <TextField
            placeholder='Email'
            type='text'
            name='email'
            onChange={updateEmail}
            value={email}
          />
          <label><br></br></label>
          <TextField
            placeholder='Password'
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
          />
          <label><br></br></label>
          <TextField
            type='password'
            placeholder='Confirm Password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          />

          <Button sx={{ mt: 2 }} variant='contained' color='primary' type='submit'>Sign Up</Button>
        </div>
      </form>
    </div>

  );
};

export default SignUpForm;
