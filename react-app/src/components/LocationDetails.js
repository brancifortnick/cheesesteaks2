import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneLocation } from "../store/location";
import { getPhotos } from "../store/image";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import UpdateBiography from "./UpdateBiography";
import ImageUpload from "./ImageUpload";
import AllImagesRefactorTwo from "./AllImagesRefactorTwo";
import "./LocationDetails.css";
import CardActions from "@mui/material/CardActions";
import { CardContent, CardHeader } from "@mui/material";
import { MapContainer } from "./MapContainer";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import AllImagesRefactorThree from "./AllImagesRefactor3";
import Avatar from "@mui/material/Avatar";

function LocationDetails() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const location = useSelector((state) => state.location);
  const images = useSelector((state) => Object.values(state.image));
  const { locationId } = useParams();
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    dispatch(getOneLocation(locationId));
    dispatch(getPhotos(locationId));
  }, [dispatch, locationId]);

  return (
    <>
      { location.profile_img && location.user_id !== null ? (


        <Card
          className="location-image"
          sx={ {
            borderRadius: "10px",
            borderBottom: "hidden",
            boxShadow: "0 4px 6px 0 rgba(3,3, 3, 3)",
            backgroundColor: "#ffffff",
            maxWidth: 800,
            margin: "auto",
          } }
        >
          <CardMedia
            component="img"
            image={ location.profile_img }
            alt="...loading profile image"
            className="location-image-media"
          />
          {/* <Box sx={{ display: 'flex', flexDirection: "row", alignItems: 'spaceEvenly', textAlign: 'center' }} > */ }
          <Card>
            <CardHeader
              avatar={
                <Avatar
                  sx={ {
                    bgcolor: "#fb6c45",
                    objectFit: "fill",
                    borderRadius: "50%",
                    height: "60px",
                    width: "60px",
                    fontSize: "20px",
                  } }
                >
                  { currentUser.id === Number(location.user_id)
                    ? currentUser.username[0].toUpperCase() +
                    currentUser.username.slice(1).toUpperCase()
                    : "Niko" }
                </Avatar>
              }
              action={
                currentUser.id === Number(location.user_id) ? (
                  <UpdateBiography
                    locationBio={ location.biography }
                    locationId={ location.id }
                  />
                ) : null
              }
            />

            <div className="location-bio">
              <div className="location-bio">{ location.location_name }</div>
              { location.biography }
            </div>
          </Card>
        </Card>
      ) : null }
      <div className="locations-container-wrapper">


        <ImageUpload locationId={ locationId } />
        <AllImagesRefactorThree images={ images } locationId={ locationId } />
      </div>
    </>
  );
}

export default LocationDetails;
