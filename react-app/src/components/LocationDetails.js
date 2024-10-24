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
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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
        <div className='locations-container-wrapper'>
            {location.profile_img && location.user_id !== null ? (
                // <Box className="location-header">


                <Card className="location-image" sx={{
                    borderRadius: '10px',
                    borderBottom: 'hidden',
                    boxShadow: '0 4px 6px 0 rgba(3,3, 3, 3)',
                    backgroundColor: '#ffffff',
                    maxWidth: 1200,


                }}>
                    <CardMedia
                        component="img"
                        image={location.profile_img} alt="...loading profile image" className="location-image-media" />
                    {/* <Box sx={{ display: 'flex', flexDirection: "row", alignItems: 'spaceEvenly', textAlign: 'center' }} > */}
                    <Card>
                        <CardHeader
                            avatar={
                                <Avatar sx={{
                                    bgcolor: '#fb6c45', objectFit:
                                        "fill", borderRadius: '50%', height: '60px', width: '60px', fontSize: '20px'

                                }} >
                                    {currentUser.id === Number(location.user_id) ? (
                                        currentUser.username[0].toUpperCase() + currentUser.username.slice(1).toUpperCase()
                                    ) : 'Niko'}
                                </Avatar>
                            }

                            action={
                                currentUser.id === Number(location.user_id) ? (
                                    <UpdateBiography locationBio={location.biography} locationId={location.id} />
                                ) : null
                            }
                        />

                        <div className="location-bio">
                            <div className='location-bio'>
                                {location.location_name}
                            </div>
                            {location.biography}

                        </div>


                    </Card>

                </Card>

            ) : null}

            <ImageUpload locationId={locationId} />
            <AllImagesRefactorThree images={images} locationId={locationId} />

        </div>
    );
}
/* he `<Box className="location-header">` element is creating a container with the class
         name "location-header" in the JSX code. This container is used to style and structure
         the content within it, typically for displaying the header section of a location in
         this specific React component. It contains the location name and an image related to
         the location, along with additional styling properties like borderRadius, boxShadow,
         and backgroundColor to enhance the visual presentation of the header. */
export default LocationDetails; 
