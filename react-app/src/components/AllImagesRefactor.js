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
import { getOneComment, getTheComments, updateAComment } from "../store/comment";
import Accordian from "./Accordian/Accordian";
import GetSpecificImage from "./GetSpecificImage";
import DeleteComment from "./DeleteComment";
import { findObjectById } from "../Utilities/StoreMethods";
import EditComment from "./EditComment";
import VoteCounter from "./VoteCounter";
import ButtonGroup from '@mui/material/ButtonGroup'

function AllImagesRefactor({ images }) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const location = useSelector(state => (state.location))
    const buildCommentTemplate = (image) => {
        if (image.comments && Array.isArray(image.comments)) {
            return image.comments.map((comment) => {
                return (
                    <div key={comment.id}><p className='comment-body'> {comment.comment}</p>
                    <ButtonGroup><EditComment imageId={image.id} commentObj={comment} />
                    <DeleteComment imageId={image.id} commentId={comment.id} />     
                    </ ButtonGroup>
                    </div>
                )
            })
        }
    }
    //returning multiple accordians
    const buildTemplate = () => {
        if (images) {
            return images.map((image) => {
                return image !== null && location.id === image.location_id ? (
                    <div key={image.id} className="pictures-container">
                        <div>
                            {/* <div>
                                <AddComments imageId={image.id} locationId={location?.id} />
                            </div> */}
                            <p>
                                {image.title}
                            </p>
                            <Card>
                                <img
                                    src={image.image}
                                    alt="loading..."
                                    className="image-card"
                                />
                            </Card>
                            <section>
                                <span>
                                    <AddComments imageId={image.id} locationId={location.id} />
                                </span>
                                <span>
                                    <Accordian toggleText='comments' children={buildCommentTemplate(image)} />
                                </span>
                            </section>
                            <CardContent>
                                <CardActions >
                                    <DeleteLocationsImages imageId={image?.id} />
                                    {/* {user.id === Number(location.user_id) ? (  ) : null} */}
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
            <div key={''}>
                {buildTemplate()}
            </div>
        </>
    );
}

export default AllImagesRefactor;
