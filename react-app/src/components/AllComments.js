import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllComments, getImagesComments } from "../store/comment";
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

function AllComments({ imageId }) {
  const dispatch = useDispatch();
  const comments = useSelector((state) => Object.values(state.comment));
  const user = useSelector((state) => state.session.user);


  useEffect(() => {
    dispatch(getImagesComments(imageId));
  }, [dispatch, imageId]);

  return (
    <div id="comment-div">
      {comments?.map((comment) => (
        <div key={comment.id}>
          <div>
            {"-"}
            {comment.image_id}"- {"im the image_id"}"
          </div>

          {"reviewed by"} - {comment?.username}

          <List sx={{ width: '100%', maxWidth: 300, mx: 'auto' }}>
            <ListItemText
              component="div"
              // variant="body2"
              color="text.primary" >
              {comment.comment}</ListItemText>
            <ButtonGroup disableElevation variant="contained">
              {comment?.user_id === user?.id ? (

                <Button> <EditComment imageId={imageId} commentId={comment.id} /> </Button>

              ) : null}
              {Number(imageId) === comment.image_id ? (
                <Button >
                  <DeleteComment commentId={comment.id} />
                </Button>
              ) : null}

            </ButtonGroup>
          </List>
        </div>
      ))}
    </div>
  );
}
export default AllComments;
//bgcolor: ''