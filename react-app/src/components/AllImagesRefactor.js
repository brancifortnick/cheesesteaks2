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
import Accordian from "./Accordian/Accordian";
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
            <div className='image-title'>{image.title}</div>
            <img src={image.image} className="image-card" alt="loading..." />
            <span>
              <AddComments imageId={image.id} locationId={location.id} />
            </span>
            <span>
              <Accordian
                toggleText="comments"
                children={buildCommentTemplate(image)}
              />
            </span>
            <CardContent>
              <CardActions>
                <DeleteLocationsImages imageId={image?.id} />
                {/* {user.id === Number(location.user_id) ? (  ) : null} */}
              </CardActions>
            </CardContent>
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
