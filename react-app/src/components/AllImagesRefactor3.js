import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Typography,
  Card,
  List,
  CardContent,
  CardActions,
  ButtonGroup,
  CardMedia,
  CardHeader,
  Stack,
  Divider,
} from "@mui/material";
import DeleteLocationsImages from "./DeleteLocationsImages";
import AddComments from "./AddComments";
import Accordion from "./Accordion";
// import "./AllImagesRefactorThree.css";
import EditComment from "./EditComment";
import DeleteComment from "./DeleteComment";
import ImageList from "@mui/material/ImageList";

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


              <ButtonGroup>
                <EditComment imageId={ image.id } commentObj={ comment } />
                <DeleteComment imageId={ image.id } commentId={ comment.id } />
              </ButtonGroup>
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
                    '22pt', justifySelf: 'center'
                } }
              >
                { image.title }
              </Typography>
              <Accordion
                toggleText="View Comments"
                children={ buildCommentTemplate(image) }
              />
              <AddComments imageId={ image.id } locationId={ location.id } />
            </CardContent>
          </Box>
        ) : null,
      );
    }
  };

  return <Box sx={ {} } className="images-grid">{ buildTemplate() }</Box>;
}

export default AllImagesRefactorThree;
