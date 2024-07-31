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
        <Box className="locations-container">
            {location.profile_img && (
                <Box className="location-header">
                    <Typography className="location-name">{location.location_name}</Typography>
                    <Card className="location-image">
                        <CardMedia
                            component="img"
                            image={location.profile_img}
                            alt="Location"
                            className="location-image-media"
                        />
                        <Box sx={{ p: 2 }}>
                            {currentUser.id === Number(location.user_id) && (
                                <UpdateBiography locationBio={location.biography} locationId={location.id} />
                            )}
                            <Typography id="description-text">{location.biography}</Typography>
                        </Box>
                    </Card>
                </Box>
            )}
            <Box className="image-upload-text">
                <ImageUpload locationId={locationId} />
                <AllImagesRefactorTwo images={images} locationId={locationId} />
            </Box>
        </Box>
    );
}

export default LocationDetails;
