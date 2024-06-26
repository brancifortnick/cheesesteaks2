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
        <div key={idx} id='location-key'>
          <div className="location-div-container">
            <Card sx={{ maxWidth: 450, maxHeight: 1650 }}>
              <NavLink to={`/locations/${location.id}`}>
                <CardMedia
                  component="card-img-style"

                  alt="establishment"
                />

                <img
                  src={location.profile_img}
                  alt="loading..."
                  className="image_card"
                />
              </NavLink>
              <Card sx={{

              }}>
              <CardContent>
                  <Typography variant="subtitle" component="div">
                  {location.location_name}
                  </Typography>
                  <CardActions sx={{ border: 'white', mb: 1, pt: 2, mt: 4 }}>
                    {(currentUser.id === location.user_id) ? (
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
              <Card>

              </Card>
            </Card>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="locations-list-container">
      <div className="locations-list-components">{locationsList}</div>
      </div>
    </>
  );
}
export default AllLocations;
