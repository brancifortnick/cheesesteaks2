import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllLocations } from "../store/location";
import DeleteEstablishment from "./DeleteEstablishment";
import "./AllLocations.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import "./AllLocations.css";
import { CardHeader, Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
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
      <div className="locations-container">


        <Card sx={{ mt: 2, maxWidth: 450, borderRadius: '10px' }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    {currentUser.username[0]}
                  </Avatar>
                }
                title={location.location_name}
                subheader={location.updated_at}
              />
              <NavLink to={`/locations/${location.id}`}>
                <CardMedia component="card-img-style" alt="establishment" />
                <img
                  src={location.profile_img}
                  alt="loading..."
                  className="image_card"
                />
              </NavLink>
              <Card>
                <CardContent>
                  <Typography variant="subtitle" component="h1">
                    {location.location_name}
                  </Typography>
                  <CardActions sx={{ mb: 1, pt: 2, mt: 4 }}>
                    {currentUser.id === location.user_id ? (
                      <DeleteEstablishment locationId={location.id} />
                    ) : null}
                  </CardActions>
                </CardContent>
              </Card>
              {/* <Typography variant="body2" color="text.secondary">
                  <NavLink
                    style={{ color: "#1976d2", fontWeight: "bolder" }}
                    to={`/locations/${location.id}/image-upload`}
                  >
                    Add Photos
                  </NavLink>
                </Typography> */}
       
            </Card>
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
