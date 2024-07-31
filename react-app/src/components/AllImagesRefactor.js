import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import DeleteLocationsImages from "./DeleteLocationsImages";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import AddComments from "./AddComments";
import Accordian from "../components/Accordian/Accordian.js";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";
import VoteCounter from "./VoteCounter";
import ButtonGroup from "@mui/material/ButtonGroup";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import "./AllImagesRefactor.css";

function AllImagesRefactor({ images }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const location = useSelector((state) => state.location);

  const buildCommentTemplate = (image) => {
    if (image.comments && Array.isArray(image.comments)) {
      return image.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p className="comment-body"> {comment.comment}</p>
            <ButtonGroup>
              <EditComment imageId={image.id} commentObj={comment} />
              <DeleteComment imageId={image.id} commentId={comment.id} />
            </ButtonGroup>
          </div>
        );
      });
    }
  };


  //returning multiple accordians
  const buildTemplate = () => {
    if (images) {
      return images.map((image) => {
        return image !== null && location.id === image.location_id ? (
          <div className="images-container">

            <div className="image-child-container">
            <div className='image-title'>{image.title}
                <img src={image.image} className="image-card" alt="loading..." />
              <CardContent>
                <CardActions>
                  <AddComments imageId={image.id} locationId={location.id} />
                  <DeleteLocationsImages imageId={image?.id} />
                  {/* {user.id === Number(location.user_id) ? (  ) : null} */}
                </CardActions>
              </CardContent>
            </div>
            </div>

            <div className='comment-module'>



              <p className='accordian-p-tag'>
                <Accordian
                  toggleText="View Comments"
                  children={buildCommentTemplate(image)}
                />

              </p>

            </div>
          </div>
        ) : null;


      });
    }
  };
  return (
    <>
      <div key="hey">{buildTemplate()}</div>
    </>
  );
}

export default AllImagesRefactor;
