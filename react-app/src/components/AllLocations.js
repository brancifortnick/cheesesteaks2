import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllLocations } from "../store/location";

import "./AllLocations.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import VotingComponent from "./VotingComponent";
import Typography from "@mui/material/Typography";
function AllLocations() {
  const dispatch = useDispatch();
  const locations = useSelector((state) => Object.values(state.location));
  const currentUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(getAllLocations());
    // dispatch(getPhotos())
  }, [dispatch]);
  const locationsList = locations.map((location, idx) => {
    return (
      <div key={location.id} className="location-card-wrapper">
        <Card sx={{ height: "auto", borderRadius: "10px", boxShadow: 3 }}>
          <NavLink to={`/locations/${location.id}`}>
            <CardMedia alt="establishment" />
            <div>
              <img
                src={location.profile_img}
                alt="loading..."
                className="image_card"
              />
            </div>
          </NavLink>
          <div className="location-name">{location.location_name}</div>
        </Card>
        <div className="voting-wrapper">
          <VotingComponent
            itemId={location.id}
            itemTitle={location.location_name}
            locationId={location.id}
          />
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="locations-list-components">{locationsList}</div>
    </>
  );
}
export default AllLocations;
