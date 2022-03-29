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
          {/* <div>
            {"-"}
            {comment.image_id}"- {"im the image_id"}"
          </div> */}
          <p>
            {"reviewed by"} - {comment?.username}
          </p>
          {/* <List sx={{ width: '100%', maxWidth: 360 }}> */}
          <Typography
            component="span"
            variant="body1"
            color="text.primary" >
            {comment.comment}</Typography>

          {comment?.user_id === user?.id ? (
            <div className="button-buttons-container">
              <EditComment imageId={imageId} commentId={comment.id} />
              <DeleteComment commentId={comment.id} />
            </div>
          ) : null}

          {/* </List> */}
        </div>
      ))}
    </div>
  );
}
export default AllComments;
//bgcolor: ''