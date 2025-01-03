import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllLocations, postNewLocation } from "../store/location";
import { TextField } from "@mui/material";
import { TextFormatRounded } from "@mui/icons-material";
import { Label } from "@mui/icons-material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Form from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import "./LocationUpload.css";
const LocationUpload = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [location_name, setLocationName] = useState("");
  const [profile_img, setProfileImg] = useState("");
  const [biography, setBiography] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZip] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile_img", profile_img);
    //fetching from backend route
    const res = await fetch("/api/locations/new-location", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      let profile_img = await res.json();
      dispatch(postNewLocation(profile_img, biography, user.id, location_name, address, city, state, zipcode));
      dispatch(getAllLocations());
    }
    history.push(`/locations`);
  };
  const updateProfileImg = (e) => {
    const file = e.target.files[0];
    setProfileImg(file);
  };
  return (
    <div className="outer_card">

      <Form>
        <h1
          id="add-location-text"
          style={ {
            color: '#fb6c45', fontSize: "24px"
          } }
        >
          Upload Establishment
        </h1>
        <form className="location-form" onSubmit={ onSubmit }>
          <div className="input_container">
            <Box sx={ { padding: "2px" } }>
              <TextField
                variant='filled'
                type="text"
                name="location_name"
                placeholder="Business Name"
                onChange={ (e) => setLocationName(e.target.value) }
                value={ location_name }
                sx={ {
                  '& .MuiFilledInput-root': {
                    '&:before': { borderBottomColor: 'black' },
                    '&:after': { borderBottomColor: '#fb6c45' },
                    '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#fb6c45' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#fb6c45',
                  },
                } }
              />
            </Box>
            <Box sx={ { p: 2 } }>

              <label
                style={ { color: "#fb6c45", fontSize: '18px' } }
                id="location-photo-text"
                htmlFor="add-location-pic"
              >
                Add store front image
              </label>
            </Box>
            <Box sx={ { p: 2 } }>
              <input
                type="file"
                accept="image/*"
                name="profile_img"
                onChange={ updateProfileImg }
              />
            </Box>
            {/* <label htmlFor="biography" >
          Biography
        </label> */}
            <Box sx={ { p: 2 } }>

              <TextField
                variant='filled'
                multiline
                fullWidth
                name="biography"
                type="text"
                placeholder="Write a brief description..."
                onChange={ (e) => setBiography(e.target.value) }
                value={ biography }
                sx={ {
                  '& .MuiFilledInput-root': {
                    '&:before': { borderBottomColor: 'black' },
                    '&:after': { borderBottomColor: '#fb6c45' },
                    '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#fb6c45' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#fb6c45',
                  },
                } }

              />

            </Box>
            <Box sx={ { p: 2 } }>
              <TextField
                variant='filled'
                type='text'
                name="address"
                placeholder="Address"
                onChange={ (e) => setAddress(e.target.value) }
                value={ address }
                sx={ {
                  '& .MuiFilledInput-root': {
                    '&:before': { borderBottomColor: 'black' },
                    '&:after': { borderBottomColor: '#fb6c45' },
                    '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#fb6c45' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#fb6c45',
                  },
                } }
              />
            </Box>
            <Box sx={ { p: 2 } }>
              <TextField
                type='text'
                name="city"
                placeholder="City"
                onChange={ (e) => setCity(e.target.value) }
                value={ city }
                variant="filled"
                sx={ {
                  '& .MuiFilledInput-root': {
                    '&:before': { borderBottomColor: 'black' },
                    '&:after': { borderBottomColor: '#fb6c45' },
                    '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#fb6c45' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#fb6c45',
                  },
                } }
              />
            </Box>
            <Box sx={ { p: 2 } }>
              <TextField
                type='text'
                name="state"
                placeholder="State"
                onChange={ (e) => setState(e.target.value) }
                value={ state }
                variant="filled"
                sx={ {
                  '& .MuiFilledInput-root': {
                    '&:before': { borderBottomColor: 'black' },
                    '&:after': { borderBottomColor: '#fb6c45' },
                    '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#fb6c45' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#fb6c45',
                  },
                } }
              />
            </Box>
            <Box sx={ { p: 2 } }>
              <TextField
                type='number'
                name='zipcode'
                placeholder="Zipcode"
                onChange={ (e) => setZip(e.target.value) }
                value={ zipcode }
                variant="filled"
                sx={ {
                  '& .MuiFilledInput-root': {
                    '&:before': { borderBottomColor: 'black' },
                    '&:after': { borderBottomColor: '#fb6c45' },
                    '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#fb6c45' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': {
                    color: '#fb6c45',
                  },
                } }
              />
            </Box>
            <Button
              variant="contained"
              m={ 2 }
              sx={ {
                color: "white",
                bgcolor: "#fb6c45",
                "&:hover": { bgcolor: "white", color: "#fb6c45" },
              } }

              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default LocationUpload;
