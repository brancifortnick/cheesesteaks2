import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllLocations, postNewLocation } from "../store/location";
import { TextField } from "@mui/material";
import { TextFormatRounded } from "@mui/icons-material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './LocationUpload.css'

const LocationUpload = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  const [location_name, setLocationName] = useState("");
  const [profile_img, setProfileImg] = useState("");
  const [biography, setBiography] = useState("");

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
      dispatch(postNewLocation(profile_img, biography, user.id, location_name));
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
      <h1 id="add-location-text">Add Establishment </h1>
      <form className="location-form" onSubmit={onSubmit}>
        <div className="input_container">
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', mt: .5 }}>
            <TextField
              type="text"
              name="location_name"
              placeholder="Location Name"
              onChange={(e) => setLocationName(e.target.value)}
              value={location_name}
            /></Box>
        </div>
        <label id='location-photo-text' htmlFor="add-location-pic">
          Add Location Photo
        </label>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', mt: .5, p: 2 }}>
          <input
            type="file"
            accept="image/*"
            name="profile_img"
            onChange={updateProfileImg}
          />
        </Box>
        {/* <label htmlFor="biography" >
          Biography
        </label> */}
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', mt: .5 }}>
          <TextareaAutosize
            name="biography"
            type="text"
            placeholder="biography..."
            onChange={(e) => setBiography(e.target.value)}
            value={biography}
            minRows={5}
            style={{ width: 400 }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center', mt: .5, pt: .5 }}>
          <Button variant='contained' color='primary' type='submit'>Submit</Button>
        </Box>
      </form>
    </div >
  );
};

export default LocationUpload;
