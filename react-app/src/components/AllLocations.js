import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllLocations } from "../store/location";

import "./AllLocations.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import "./AllLocations.css";
import { CardHeader, Container } from "@mui/material";
import DeleteLocation from "./DeleteLocation";

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
      <>
        <div></div>
        <div className="locations-container">
          <Card sx={{ height: "auto", borderRadius: "10px" }}>
            {/* <Typography sx={{ padding: 1 }} variant="subtitle" component="body">{location.updated_at}</Typography> */}
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
        </div>
      </>
    );
  });
  return (
    <>
      <div className="locations-list-components">{locationsList}</div>
    </>
  );
}
export default AllLocations;
