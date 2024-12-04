import React from "react";
import { useSelector } from "react-redux";
import {  Box,Typography,List,CardContent,Button,Divider} from "@mui/material";
import DeleteLocationsImages from "./DeleteLocationsImages";
import AddComments from "./AddComments";
import Accordion from "./Accordion";
import EditComment from "./EditComment";
import DeleteComment from "./DeleteComment";
import './AllImagesRefactorThree.css';

function AllImagesRefactorThree({ images }) {
  const user = useSelector((state) => state.session.user);
  const location = useSelector((state) => state.location);

  const buildCommentTemplate = (image) => {
    if (image.comments && Array.isArray(image.comments)) {
      return image.comments.map((comment) => (
        <div className="delete-comment-div">
          <div className="comment-container" key={ comment.id }>
            <Box key={ comment.id } >
              <List sx={ { color: 'gray' } }>
                { comment.comment }    </List>
              <span style={ { alignSelf: 'flex-start', color: '#fb6c45', fontWeight: 400, fontSize: 18 } }>   { "Review By -" + " " + " " + `${comment.user.username}` } </span>

              <Divider />
              <Button>
                <EditComment imageId={ image.id } commentObj={ comment } />
              </Button>

              <Button>
                <DeleteComment imageId={ image.id } commentId={ comment.id } />
              </Button>
            </Box>
          </div>
        </div>
      ));
    } else {
      console.log("no comments currently");
    }
  };
  const buildTemplate = () => {
    if (images) {
      return images.map((image) =>
        image !== null && location.id === image.location_id ? (
          <Box key={ image.id } className="image-card-container">
            <img src={ image.image }
              alt="images-image-src"
            ></img>
            { user.id === location.user_id ? (
              <DeleteLocationsImages imageId={ image.id } />
            ) : null }
            <CardContent>
              <Typography
                component='primary-subtitle'
                className="image-title"
                sx={ {
                  fontWeight: "bold", fontSize:
                    '24px', justifySelf: 'center'
                } }
              >
                { image.title }
              </Typography>
              <div className='accordion-wrapper'>
              <Accordion
                toggleText="View Comments"
                children={ buildCommentTemplate(image) }
                />

                <AddComments imageId={ image.id } locationId={ location.id } />
              </div>
            </CardContent>
          </Box>
        ) : null,
      );
    }
  };
  return (
    <Box  className="images-grid">{ buildTemplate() }</Box>
  );
}

export default AllImagesRefactorThree;
