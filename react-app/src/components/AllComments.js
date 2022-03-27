import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllComments, getImagesComments } from "../store/comment";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";
import AddComments from "./AddComments";
import {UserContext} from '../App'
function AllComments({imageId}) {
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
            <aside>{comment?.username}</aside>
          </div>
          <div>{comment.comment}</div>
          {comment?.user_id === user?.id ? (
            <div className="button--buttons-container">
              <EditComment imageId={imageId} commentId={comment.id} />
              <DeleteComment commentId={comment.id} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
export default AllComments;
