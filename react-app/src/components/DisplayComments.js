import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AllComments from './AllComments';
import AddComments from './AddComments';
import { ImageAspectRatio, NightShelter } from '@mui/icons-material';


const DisplayComments = () => {
  const comments = useSelector((state) => Object.values(state.comment));

  const images = useSelector((state) => Object.values(state.image));
  console.log(images, "images coming from displaycomments")
  const user = useSelector(state => state.session.user)

  return (
    <div id="comment-div">
      {comments?.map((comment) => (
        <div key={comment.id}>
          {comment.comment}
          <div className="button--buttons-container">

          </div>

        </div>
      )
      )}
    </div>
  )
};


export default DisplayComments;
