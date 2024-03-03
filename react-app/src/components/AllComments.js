import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getAllComments, getImagesComments } from "../store/comment";
import { getImageComments, getAPhoto, getPhotos } from "../store/image";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";
import AddComments from "./AddComments";
import { UserContext } from '../App'
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List'
import DeleteIcon from '@mui/icons-material/Delete'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function AllComments() {


  const dispatch = useDispatch();
  const comments = useSelector((state) => Object.values(state.comment));
  const user = useSelector((state) => state.session.user);
  const images = useSelector(state => Object.values(state.image))
  const { imageId } = useParams()


  useEffect(() => {
    console.log(imageId, 'inside useEffect allcomments')
    if (images) {
      dispatch(getPhotos(imageId))
      dispatch(getImagesComments())
    }
    else
      console.log(imageId, "imageId, after dispatch")
  }, [dispatch, imageId])







  return (
    <div id="comment-div">
      {comments?.map((comment) => (
        <div key={comment.id}>

          <AddComments />
          <div>
            {comment.image_id}"- {"im the comment.image_id"}"
            <h4>{"reviewed by"} - {comment?.username}</h4>
            <p>{comment.comment}</p>
            <List sx={{ width: '100%', maxWidth: 300, mx: 'auto' }}>
              <ListItemText
                component="div"
                // variant="body2"
                color="text.primary" >
              </ListItemText>


              <ButtonGroup disableElevation variant="contained">
                {comment?.user_id === user?.id ? (

                  <Button>
                    <EditComment commentId={comment.id} />
                  </Button>

                ) : null}

                {comment?.user_id === user?.id ? (
                  <Button >
                    <DeleteComment commentId={comment.id} />
                  </Button>
                ) : null}
              </ButtonGroup>
            </List>
          </div>
        </div>


      ))}

    </div>

  )
};



export default AllComments;

/*{/* <CardContent>
<CardActions>
{comments.map((comment) => (
   <div key={comment.id}>
   comment.image_id == image.id ? (
   <AllComments commentId={comment.id} imageId={image.id} />
 ): null}

</CardActions>

)} */
