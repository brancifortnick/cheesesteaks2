import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllLocations } from "../store/location";
import Grid from "@mui/material/Grid";
import DeleteEstablishment from "./DeleteEstablishment";
import "./AllLocations.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";


function AllLocations() {
  const dispatch = useDispatch();
  const locations = useSelector((state) => Object.values(state.location));
  const currentUser = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(getAllLocations());
  }, [dispatch]);

  const locationsList = locations.map((location, idx) => {
    return (
      <div className="locations-container">
        <div key={idx} id='location-key'>
          <div className="location-div-container">
            <Card sx={{ maxWidth: "200px" }}>
              <NavLink to={`/locations/${location.id}`}>
                <CardMedia
                  component="card-img-style"
                  height="200"
                  image={location.profile_img}
                  alt="establishment"
                />
                <img
                  src={location.profile_img}
                  alt="loading..."
                  className="image_card"
                ></img>
              </NavLink>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {location.location_name}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                  <NavLink
                    style={{ color: "#1976d2", fontWeight: "bolder" }}
                    to={`/locations/${location.id}/image-upload`}
                  >
                    Add Photos
                  </NavLink>
                </Typography> */}


                <CardActions sx={{ mt: 8 }}>
                  {currentUser.id === Number(location.user_id) ? (
                    <DeleteEstablishment locationId={location.id} />
                  ) : null}
                </CardActions>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div key="" className="locations-list-container">
      <div className="locations-list-components">{locationsList}</div>
    </div>
  );
}
export default AllLocations;
