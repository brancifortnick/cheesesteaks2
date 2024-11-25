import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllLocations } from "../store/location";
import './UsersLocations.css'
import DeleteLocation from "./DeleteLocation";
import UpdateBiography from "./UpdateBiography";
const UsersLocations = () => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => Object.values(state.location));
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(getAllLocations());
  }, [dispatch]);

  const usersLocations = locations.map((location, idx) => {
    return user.id === Number(location.user_id) ? (
      <div>
        <h4>Click on a location to view more details</h4>
        <div key={ idx } className="musician-ol">
          {/* <div id="musician-name">{musician.musician_name}</div> */ }
          <NavLink
            to={ `/locations/${location.id}` }
          >{ `View ${location.location_name}` }</NavLink>
        </div>
        <div className="location-div">
          <img src={ location.profile_img } alt="_blank" className="card"></img>

          <div className="delete-location-profile-page">
            <DeleteLocation locationId={ location.id } />
          </div>

        </div>
      </div>
    ) : null;
  });

  return (
    <div className="user-locations-container">
      <div id="users-locations">{ usersLocations }</div>
    </div>
  );
};
export default UsersLocations;
