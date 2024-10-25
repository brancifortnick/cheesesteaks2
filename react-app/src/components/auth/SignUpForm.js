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
const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
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
    <div className="outter-signup-container" style={{ padding: "4rem" }}>
      <form onSubmit={onSignUp}>
        {/* <div className='form-container-sign-up'> */}
        <Box sx={{ pt: 2, p: 1 }}>
          <TextField
            placeholder="Username"
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          />
        </Box>
        <Box sx={{ p: 1 }}>
          <TextField
            placeholder="Email"
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
            sx={{}}
          />
        </Box>
        <Box sx={{ p: 1 }}>
          <TextField
            placeholder="Password"
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          />
        </Box>
        <Box sx={{ p: 1 }}>
          <TextField
            type="password"
            placeholder="Confirm Password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          />
        </Box>
        {/* </div> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            mt: 2,
          }}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{
              color: "white",
              bgcolor: "#fb6c45",
              padding: "2px",
              "&:hover": { bgcolor: "black", color: "white" },
            }}
          >
            Sign Up
          </Button>
        </Box>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            m: 2,
          }}
        >
          {" "}
          Already a user ? Click Below
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            mt: 2,
          }}
        >
          <NavLink to="/login" exact={true}>
            <Login sx={{ color: "#fb6c45", bgcolor: "#fff1b4" }} />
          </NavLink>
        </Box>
      </form>
    </div>
  );
};
export default SignUpForm;
