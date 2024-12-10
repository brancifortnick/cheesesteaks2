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


  // const myScrollBarElement = document.querySelector('.comments-scrollable');


  const buildCommentTemplate = (image) => {
    if (image.comments && Array.isArray(image.comments)) {
      return image.comments.map((comment) => (
        <div className="delete-comment-div">
          <div className="comment-container" key={ comment.id }>
            <Box key={ comment.id } >
              <List sx={ { color: '#fb6c45' } }>
                { comment.comment }    </List>
              <span style={ { color: 'black', fontWeight: 400, fontSize: 18 } }>   { "Review By -" + " " + " " + `${comment.user.username}` } </span>

              <Divider />
              <Button>
          {user.id ===comment.user_id ? (

                <EditComment imageId={ image.id } commentObj={ comment } />
          ): null}
              </Button>
              <Button>
          {user.id ===comment.user_id ? (
                <DeleteComment imageId={ image.id } commentId={ comment.id } />
    ): null}
              </Button>
            </Box>
          </div>
        </div>
      ));
    } else {
      console.log("no comments currently");
    }
  };
//*replaced the accordion component with a div calling the function rather then the accordion component toggling (using children as a prop from acoordion and toggletxt)the sizing of the flex boxes which are contritbuting to image styling

  const buildTemplate = () => {
    if (images) {
      return images.map((image) =>
        image !== null && location.id === image.location_id ? (
          <div className="image-card-container">
          <Box key={ image.id } className="image-card-container">
            <img src={ image.image }
              alt="images-image-src"
              />

            <CardContent>
              <Typography
                component='primary-subtitle'
                className="image-title"
                  sx={ {
                    color: '#fbd345',
                    fontSize:
                    '24px', justifySelf: 'center'
                } }
              >
                { image.title }
              </Typography>
              <div className='accordion-wrapper'>
                  {/* <Accordion
                    toggleText="View Comments"
                    children={  }
                /> */}



                  <div className="comments-scrollable"> { buildCommentTemplate(image) }</div>
                <AddComments imageId={ image.id } locationId={ location.id } />
              </div>
            </CardContent>
          </Box>
          </div >
        ) : null,
      );
    }
  };
  return (
    <Box  className="images-grid">{ buildTemplate() }</Box>
  );
}

export default AllImagesRefactorThree;
