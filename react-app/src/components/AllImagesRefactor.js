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
import { getOneComment, getTheComments } from "../store/comment";
import Accordian from "./Accordian/Accordian";

function AllImagesRefactor({ images }) {


    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);


    const location = useSelector(state => (state.location))


    useEffect(() => {

        console.log(images, "in useFx")

    }, [dispatch, images]);


    const buildCommentTemplate = (image) => {
        if (image.comments && Array.isArray(image.comments)) {
            return image.comments.map((comment) => {
                return <div>{comment.comment}</div>
            })
        }
    }


    const buildTemplate = () => {
        if (images) {


            return images.map((image) => {
                return image !== null && location.id === image.location_id ? (
                    <div className="pictures-container">
                        <div key={image}>
                            {/* <h4 className="image-title">{image.title}</h4> */}
                            <Typography gutterBottom variant="h3" component="div">
                                {image.title}
                            </Typography>
                            <div>{image.id}</div>
                            <Card>
                                <img
                                    src={image.image}
                                    alt="loading..."
                                    className="image_card"
                                />
                            </Card>
                            <Accordian toggleText='comments' children={buildCommentTemplate(image)} />
                            <CardContent>
                                <CardActions sx={{ mt: 8 }}>
                                    {user.id === Number(location.user_id) ? (
                                        <DeleteLocationsImages imageId={image?.id} locationId={location.id} />
                                    ) : null}
                                </CardActions>
                            </CardContent>

                        </div>
                    </div>

                ) : null;
            });
        }
    }







    return (
        <>
            <div>
                {buildTemplate()}
            </div>
        </>
    );
};

export default AllImagesRefactor;
