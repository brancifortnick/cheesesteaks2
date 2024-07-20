import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import DeleteLocationsImages from "./DeleteLocationsImages";
import ImageList from "@mui/material/ImageList";

import ImageListItem from "@mui/material/ImageListItem";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import AddComments from "./AddComments";

import {
  getOneComment,
  getTheComments,
  updateAComment,
} from "../store/comment";
import Accordian from "./Accordian/Accordian";
import Divider from "@mui/material/Divider";
import DeleteComment from "./DeleteComment";
import { findObjectById } from "../Utilities/StoreMethods";
import EditComment from "./EditComment";
import VoteCounter from "./VoteCounter";
import ButtonGroup from "@mui/material/ButtonGroup";
import { CardHeader } from "@mui/material";
//mui styling
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

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
  //mui styling funcs for images

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  //returning multiple accordians
  const buildTemplate = () => {
    if (images) {
      return images.map((image) => {
        return image !== null && location.id === image.location_id ? (
        
            
            <div className='images-container'> {image.title}
           
                <img
                  src={image.image}
                  alt="loading..."
                  className="image-card"
                  />
                
           
              <section>
                <span>
                  <AddComments imageId={image.id} locationId={location.id} />
                </span>
                <span>
                  <Accordian
                    toggleText="comments"
                    children={buildCommentTemplate(image)}
                  />
                </span>
              </section>
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
