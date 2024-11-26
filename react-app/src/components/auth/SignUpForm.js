import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import "./SignUpForm.css";
import Login from "@mui/icons-material/Login";
import LoginForm from "./LoginForm";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import FormControl from "@mui/material/FormControl";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();



  //theme for disabling input blue outline color


  const inputTheme = createTheme({
    palette: {
      action: {
      }
    },
  });








  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
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
    return <Redirect to="/" />;
  }
  return (
    <div className="outter-signup-container" style={ { padding: "4rem" } }>
      <div className='input-fields'>
        <form className='input-fields' onSubmit={ onSignUp }>
          {/* <div className='form-container-sign-up'> */ }
          <Box sx={ { pt: 2, p: 2 } }>
            <TextField
              placeholder="Username"
              type="text"
              name="username"
              onChange={ updateUsername }
              value={ username }
            />
          </Box>
          <Box sx={ { p: 2 } }>
            <TextField
              placeholder="Email"
              type="text"
              name="email"
              onChange={ updateEmail }
              value={ email }
              sx={ {} }
            />
          </Box>
          <Box sx={ { p: 2 } }>
            <TextField
              theme={ inputTheme }
              variant="outlined"
              placeholder="Password"
              type="password"
              name="password"
              onChange={ updatePassword }




            />

        </Box>
          <Box sx={ { p: 2 } }>
          <TextField
            type="password"
            placeholder="Confirm Password"
            name="repeat_password"
              onChange={ updateRepeatPassword }
              value={ repeatPassword }
              required={ true }
          />
        </Box>
          {/* </div> */ }
        <Box
            sx={ {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
              mt: 6,
            } }
          >

          <Button
            variant="contained"
            type="submit"
              sx={ {
              color: "white",
              bgcolor: "#fb6c45",

              mt: 4,

              "&:hover": { bgcolor: "white", color: "#fb6c45" },
            } }
          >
            Sign Up
          </Button>
        </Box>
        <div
            style={ {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
              mt: 4,
            } }
        >
            <Box sx={ { mt: 2 } }>
              Already a user ? Click Below
            </Box>
        </div>
        <Box
            sx={ {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            mt: 2,
            } }
        >
            <NavLink to="/login" exact={ true }>
              <Login sx={ { color: "#fb6c45", bgcolor: "#white", "&:hover": { bgcolor: "#fb6c45", color: "white" }, } } />
          </NavLink>
        </Box>
        </form>
      </div>
    </div >
  );
};
export default SignUpForm;



//      // sx={ {
