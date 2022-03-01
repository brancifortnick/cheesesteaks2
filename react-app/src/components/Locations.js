import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getOneLocation } from "../store/location";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from 'react-router-dom'
import UpdateBiography from "./UpdateBiography";
import ImageUpload from "./ImageUpload";



function Locations() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const { locationId } = useParams();

  const location = useSelector((state) => state.location);


  useEffect(() => {
    dispatch(getOneLocation(Number(locationId)));

  }, [dispatch, locationId]);

  return (
    <div className="card-container">
      {location.profile_img !== null ? (
        <img
          className="card"
          src={location.profile_img}
          alt="profile_img"
        ></img>
      ) : (
        <img
          className="card"
          src="https://via.placeholder.com/350x150"
          alt="_blank"
        ></img>
      )}

      <div className="biography-div">
        <div id="bio">
          <strong>Biography</strong>
        </div>
        <p id="bio">{location.biography}</p>
        <div id="update-biography">
          {currentUser.id === Number(location.user_id) ? (
            <UpdateBiography
              locationBiography={location.biography}
              locationId={locationId}
            />
          ) : null}
        </div>
        <div>
          {currentUser.id === Number(location.user_id) ? (
            <ImageUpload locationId={locationId} />
          ) : null}
        </div>
      </div>
      {/* <div id="delete-component">
        {currentUser.id === Number(musicians.user_id) ? (
          <DeleteMusician musicianId={musicianId} />
        ) : null}


      {/* <div className="song-form">
        {currentUser.id === Number(musicians.user_id) ? (
          <UploadSong musicianId={musicianId} />
        ) : null} */}
      {/* </div>
      <div className="audio-div">
        <AllSongs musicianId={musicianId} />
      </div> */}
    </div>
  );
}
export default Locations;
