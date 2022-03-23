import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getOneLocation } from "../store/location";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UpdateBiography from "./UpdateBiography";
import DeleteLocation from "./DeleteLocation";
import VoteUpdater from "./VoteUpdater";
import VoteCounter from "./VoteCounter";
import GetLocationsImages from "./GetLocationsImages";
import AddComments from "./AddComments";
import AllComments from "./AllComments";
import Grid from "@mui/material/Grid";
import DeleteEstablishment from "./DeleteEstablishment";
import { getImagesComments } from "../store/comment";

function Locations() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const { locationId } = useParams();
  const image = useSelector((state) => Object.values(state.image));
  const comment = useSelector((state) => Object.values(state.comment));
  const location = useSelector((state) => state.location);
  console.log(image, "image <<<<<<<< locations.js");

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
      ) : (
        <img
          className="card"
          src="https://via.placeholder.com/350x150"
          alt="_blank"
          style={{ height: "300px", width: "500px" }}
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
              locationBio={location.biography}
              locationId={location.id}
            />
          ) : null}
        </div>
        <div>
          {" "}
          {/* <AddComments imageId={image.id} /> */}
        </div>
        <div>
          <GetLocationsImages imageId={image.id} locationId={locationId} />
        </div>
      </div>
      <div id="delete-component">
        {currentUser.id === Number(location.user_id) ? (
          <DeleteLocation locationId={locationId} />
        ) : null}
      </div>
      <div>{/* <VoteCounter locationId={locationId} /> */}</div>
    </div>
  );
}
export default Locations;
