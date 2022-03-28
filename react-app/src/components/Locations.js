import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getOneLocation } from "../store/location";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UpdateBiography from "./UpdateBiography";
import DeleteLocation from "./DeleteLocation";

import GetLocationsImages from "./GetLocationsImages";
import AllComments from "./AllComments";
import DeleteEstablishment from "./DeleteEstablishment";
import { getImagesComments } from "../store/comment";
import Grid from "@mui/material/Grid";
import DeleteLocationsImages from "./DeleteLocationsImage";
import './Locations.css'

function Locations() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const { locationId } = useParams();
  const image = useSelector((state) => Object.values(state.image));
  const comment = useSelector((state) => Object.values(state.comment));
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
          style={{ height: "300px", width: "500px" }}
        ></img>

      ) : null}

      <div className="description-div">

        <span id='description-text'><strong>Description</strong></span>
      </div>
      <p id="bio">{location.biography}</p>
      <div id="update-biography">
        {currentUser.id === Number(location.user_id) ? (
          <UpdateBiography
            locationBio={location.biography}
            locationId={location.id}
          />
        ) : null}
      </div>
      <div>
        {" "}
        {/* <AddComments  locationId={locationId}/> */}
        <div className='establishment-images'>
          <GetLocationsImages imageId={image.id} locationId={locationId} />

        </div>
        {/* <AllComments imageId={image.id} locationId={locationId} /> */}
      </div>

      <div id="delete-component">
        {currentUser.id === Number(location.user_id) ? (
          <DeleteLocation locationId={locationId} />
        ) : null}
      </div>
      {/* <div>
        {currentUser.id === Number(image.user_id) ? (
          <DeleteLocationsImages imageId={image.id} locationId={locationId} />
        ) : null}
      </div> */}
      <div>{/* <VoteCounter locationId={locationId} /> */}</div>
    </div>
  );
}
export default Locations;
