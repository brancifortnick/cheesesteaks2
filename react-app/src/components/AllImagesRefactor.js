import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getPhotos } from "../store/image";
import DeleteLocationsImages from "./DeleteLocationsImages";
import { getAllLocations, getOneLocation } from "../store/location";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
function AllImagesRefactor() {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const images = useSelector((state) => Object.values(state.image));
    const image = useSelector((state) => (state.image))
    const location = useSelector(state => (state.location))
    // const comments = useSelector(state => state.comment)
    const { locationId } = useParams()
    console.log("locationId <<<<<", locationId, "location>>>>", location, "allimagesRefactor====>>>>")
    console.log("allimagesrefactor", "image singular state without object.values", image, "plural=>", images)

    useEffect(() => {
        dispatch(getPhotos());

        //
    }, [dispatch, locationId]);

    const locationsPictures = images.map((image) => {
        return image.url !== null && location.id === image.location_id ? (
            <div className="pictures-container">
                <div key={image} imageId={image.id}>
                    {/* <h4 className="image-title">{image.title}</h4> */}
                    <div>{"im the image id fool" + "" + image.id}</div>
                    <Card sx={{ display: "flex", alignContent: "center" }}>
                            <CardMedia
                                component="card-img-style"
                                height="200"
                                image={location.profile_img}
                            alt="blank_"
                            />

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {image.title}
                            </Typography>
                            <NavLink to={`/images/${image.id}`}>

                            <img
                                className="locations-pictures"
                                src={image.image}
                                alt="_blank"
                                /></NavLink>
                            <CardActions sx={{ mt: 8 }}>
                                {user.id === Number(image.user_id) ? (
                                    <DeleteLocationsImages />
                                ) : null}
                            </CardActions>
                        </CardContent>
                    </Card>
                </div>
            </div>

        ) : null;
    });
    return (
        <>
            {locationsPictures}
        </>
    );
};

export default AllImagesRefactor;
