import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllLocations } from '../store/location';
import AddComments from "./AddComments";
import Grid from '@mui/material/Grid';
import DeleteEstablishment from "./DeleteEstablishment";
import './AllLocations.css'

function AllLocations() {
  const dispatch = useDispatch();
  const locations = useSelector((state) => Object.values(state.location));
  const currentUser = useSelector(state => state.session.user)
  useEffect(() => {
    dispatch(getAllLocations());
  }, [dispatch]);

  const locationsList = locations.map((location, idx) => {
    return (
      <div className="locations-container">
        <div key={idx}>
          <div className="location-div-container">
            {/* 
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"

            > */}
            <NavLink to={`/locations/${location.id}`}>
              <img
                src={location.profile_img}
                alt="loading..."
                className="image_card"
              ></img>
              <div className="location-name">{location.location_name}</div>
            </NavLink>

            <NavLink to={`/locations/${location.id}/image-upload`}>Upload Food</NavLink>
            {currentUser.id === Number(location.user_id) ? (
              <DeleteEstablishment
                locationId={location.id}
              />
            ) : null}
            {/* </Grid> */}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div key='' className="locations-list-container">
      <div className="locations-list-components">{locationsList}</div>
    </div>
  );
}
export default AllLocations;
