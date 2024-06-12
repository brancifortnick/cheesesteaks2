import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AddComments from './AddComments';
import DeleteComment from './DeleteComment';
import { getOneComment, getTheComments } from '../store/comment';


const DisplayComments = () => {
  const comments = useSelector((state) => Object.values(state.comment));

  const images = useSelector((state) => Object.values(state.image));
  console.log(images, "images coming from displaycomments")
  const user = useSelector(state => state.session.user)

  const dispatch = useDispatch()




  useEffect(() => {
    dispatch(getTheComments())
  }, [dispatch])


  return (
    <div id="comment-div">
      {comments?.map((comment) => (
        <div key={comment.id}>
          {comment.comment}
          <div className="button--buttons-container">

          </div>
          <DeleteComment commentId={comment?.id} />
        </div>

      )
      )}
    </div>
  )
};


export default DisplayComments;
