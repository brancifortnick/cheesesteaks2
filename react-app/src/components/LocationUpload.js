import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllLocations, postNewLocation } from "../store/location";
import "./MusicianFormThree.css";

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
    const res = await fetch("/api/locations/new-picture", {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      let profile_img = await res.json();
      dispatch(postNewLocation(profile_img, biography, user.id, location_name));
      dispatch(getAllLocations());
    }
    history.push(`/users/${user.id}`);
  };

  const updateProfileImg = (e) => {
    const file = e.target.files[0];
    setProfileImg(file);
  };

  return (
    <div className="outer_card">
      <h1 id="add-musician-text">Add A Location</h1>
      <form className="musician-form" onSubmit={onSubmit}>
        <div className="input_container">
          <label htmlFor="location_name" >
           Location Name
          </label>
          <input
            type="text"
            name="musician_name"
            placeholder="Musician Name"
            onChange={(e) => setLocationName(e.target.value)}
            value={location_name}
          />
        </div>
        <label htmlFor="add-location-pic">
          Add Location Picture
        </label>
        <input
          type="file"
          accept="image/*"
          name="profile_img"
          onChange={updateProfileImg}
        />
        <label htmlFor="biography" >
          Biography
        </label>
        <textarea
          name="biography"
          type="text"
          placeholder="biography..."
          onChange={(e) => setBiography(e.target.value)}
          value={biography}
        />
        <button className="submit" type="submit" id="create_location">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LocationUpload;
