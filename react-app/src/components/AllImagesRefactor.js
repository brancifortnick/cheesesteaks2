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
import AddComments from './AddComments'
import GetSingleComment from "./GetSingleComment";
import DisplayComments from "./DisplayComments";
import { getOneComment } from "../store/comment";


function AllImagesRefactor({ imageId }) {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const images = useSelector((state) => Object.values(state.image));
    const { locationId } = useParams()
    const location = useSelector(state => (state.location))
    const comment = useSelector(state => state.comment)
    console.log(comment, "comment ")

    useEffect(() => {

        dispatch(getOneComment(imageId))
    }, [dispatch, imageId]);

    const locationsPictures = images.map((image) => {
        return image !== null && location.id === image.location_id ? (
            <div className="pictures-container">
                <div key={image.id}>
                    {/* <h4 className="image-title">{image.title}</h4> */}
                    <div>{'hey im the' + " " + 'image.id of the image below' + " " + image.id}</div>

                    <Card>
                        <NavLink to={`/images/${image.id}`}>
                            <img
                                src={image.image}
                                alt="loading..."
                                className="image_card"
                            />

                        </NavLink>
                        <CardContent>
                            <Typography gutterBottom variant="h3" component="div">
                                {image.title}
                            </Typography>
                            <div className='comment-component'>

                                <AddComments locationId={locationId} imageId={image.id} />
                            </div>
                            {/* <div>
                                {image.id === comment.image_id ? (
                                    <DisplayComments imageId={image?.id} commentId={comment.id} />
                                ) : null}
                            </div> */}

                            <img
                                className="locations-pictures"
                                src={image.image}
                                alt="_blank"
                            />
                            <div>
                                <DisplayComments imageId={image.id} commentId={comment.id} />

                            </div>

                            <CardActions sx={{ mt: 8 }}>
                                {user.id === Number(location.user_id) ? (
                                    <DeleteLocationsImages imageId={image.id} locationId={locationId} />
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
            <div>
                {locationsPictures}
            </div>
        </>
    );
};

export default AllImagesRefactor;
