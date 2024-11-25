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
      <div className="location-details-container">

        <div className="location-details-image-container">
          <h1 className='location-name'>{ location.location_name }</h1>
          <Box  sx={{display: 'flex',flexDirection: 'row', justifyContent: 'center'}}>
            <img style={ { borderRadius: '50%', height: '50%', width: '50%' } } src={ location.profile_img } alt="location" className="location-details-image" />
          </Box>
          <div className='location-name'>

            { location.address + ',' + " " }
            { location.city + ',' + " " }
            { location.state + ',' + " " }
            { location.zipcode }

          </div>

      <div className='upload-image-button'>
        <ImageUpload locationId={ locationId } />
      </div>


        <div className="images-container-wrapper">
          <AllImagesRefactorThree images={ images } locationId={ locationId } />
        </div>
        </div>
      </div>
    </>

  );
}

export default LocationDetails;
