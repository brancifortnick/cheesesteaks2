import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getOneLocation } from "../store/location";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UpdateBiography from "./UpdateBiography";
import ImageUpload from "./ImageUpload";
import Voting from "./VoteCounter";
import DeleteLocation from "./DeleteLocation";
import GetPhotosVotes from "./GetPhotosVotes";
import VoteCounter from "./VoteCounter";
import {getAllVotes} from '../store/vote'
import GetLocationsImages from "./GetLocationImages";


function Locations() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const { locationId } = useParams();
  const image = useSelector(state => state.image)
  const location = useSelector((state) => state.location);

  useEffect(() => {
    dispatch(getOneLocation(Number(locationId)));
    // dispatch(getAllVotes(Number(locationId)))
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
              locationId={locationId}

            />
          ) : null}
        </div>
        <div>
          {currentUser.id === Number(location.user_id) ? (
            <ImageUpload  locationId={locationId}/>
          ) : null}
        </div>
      </div>
      <NavLink to={`/locations/${location.id}/images/`}>Images</NavLink>
      <div id="delete-component">
        {currentUser.id === Number(location.user_id) ? (
          <DeleteLocation locationId={locationId} />
        ) : null}
      </div>
      <div>

      </div>

      {/* </div>
      <div className="audio-div">
        <AllSongs musicianId={musicianId} />
      </div> */}
    </div>
  );
}
export default Locations;
