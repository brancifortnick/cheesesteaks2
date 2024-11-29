import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import Box from "@mui/material/Box";
import { login } from "../../store/session";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import "./LoginForm.css";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={ onLogin }>
      <div className='login-errors'>
        { errors.map((error, ind) => (
          <div key={ ind }>{ error }</div>
        )) }
      </div>
      <div className='login-container'>
        {/* <Box sx={{ display: 'inline-flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', m: 1, width: '28ch' }}> */ }
        <div className='inner-login-wrapper'>
          <Box sx={ { mx: "auto", maxWidth: "28ch", pt: 8 } }>
            <TextField
              required
              variant='filled'
              label="Required"
              value={ email }
              onChange={ updateEmail }
            />
          </Box>
          <Box sx={ { mx: "auto", maxWidth: "28ch", pt: 1, borderRadius: '10px' } }>
            <FormControl >
              <InputLabel htmlFor="password">Password</InputLabel>
              <FilledInput

                label="Required"

                type={ values.showPassword ? "text" : "password" }
                value={ password }
                defaultValue="Normal"
                onChange={ updatePassword }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={ handleClickShowPassword }
                      onMouseDown={ handleMouseDownPassword }


                    >
                      { values.showPassword ? <VisibilityOff /> : <Visibility /> }
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>

          <Box
            sx={ {
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              mt: 2,
              fontWeight: 500,
            } }
          >
            <Button
              className="login-button"
              variant="contained"
              sx={ {
                color: "white",
                bgcolor: "#fb6c45",
                "&:hover": { bgcolor: "white", color: "#fb6c45" },
              } }
              type="submit"
            >
              Login
            </Button>
          </Box>
        </div>

      </div>
    </form>
  );
};

export default LoginForm;
