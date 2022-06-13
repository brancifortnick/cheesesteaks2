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
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='form-container-sign-up'>
        <label>User Name</label>
        <TextField
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        />
        <label>Email</label>
        <TextField
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        />
        <label>Password</label>
        <TextField
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        />
        <label>Repeat Password</label>
        <TextField
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        />
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', mt: 0.5 }}>
          <Button variant='contained' color='primary' type='submit'>Sign Up</Button>
        </Box>
      </div>
    </form>
  );
};

export default SignUpForm;
