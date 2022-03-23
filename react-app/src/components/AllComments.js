import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllComments, getImagesComments } from "../store/comment";
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";
import AddComments from "./AddComments";
function AllComments({ imageId }) {
  const dispatch = useDispatch();
  //   const images = useSelector((state) => Object.values(state.image))
    console.log(imageId)
  const comments = useSelector((state) => Object.values(state.comment));
  const user = useSelector((state) => state.session.user);

  //    let imageObj = Object.values(image).filter(image=> image.id === comments.image_id);
  //     console.log(imageObj, "imageOBJ creation")

  //   let imageId = comments.filter((comment) => {
  //     return comment.image_id === image.id;
  //   });

  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);

  return (
    <div id="comment-div">

      {comments?.map((comment) => (
        <div key={comment.id}>
          <div>
            {"--"}
            {comment?.username}
          </div>
          <div>{comment.comment}</div>
          <div className="user-object--content">
            {/* {comment.image_id === imageId ?  : null} */}
          </div>
          {comment?.user_id === user?.id ? (
            <div className="button--buttons-container">
              <EditComment commentId={comment.id} />
              <DeleteComment commentId={comment.id} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
export default AllComments;
