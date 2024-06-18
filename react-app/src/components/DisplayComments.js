import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AddComments from './AddComments';
import DeleteComment from './DeleteComment';
import { getOneComment, getTheComments } from '../store/comment';
import EditComment from './EditComment';
import Button from '@mui/material/Button'
import AllImagesRefactor from './AllImagesRefactor';

const DisplayComments = ({ imageId }) => {
  const comments = useSelector((state) => Object.values(state.comment));

  const images = useSelector((state) => Object.values(state.image));
  console.log(images, "images coming from displaycomments")
  const user = useSelector(state => state.session.user)
  const image = useSelector(state => state.image)
  const location = useSelector(state => state.location)
  console.log(imageId, "imageId===>displayComments prop")
  console.log(images, "images", image, ">>>>>image")
  const dispatch = useDispatch()




  useEffect(() => {

    dispatch(getTheComments())

  }, [dispatch, imageId])


  return (
    <div id="comment-div">
      <div>
        <div>
          {comments?.map((comment) => (
            <div key={comment.id}>
              {comment.comment}
              <div className="button--buttons-container">
                <div>
                  {/* <AllImagesRefactor imageId={imageId} commentId={comment.id} /> */}
                  <Button>
                    {comment.image_id === Number(imageId) ? (
                      <EditComment commentsImageId={comment.image_id} commentId={comment?.id} />
                    ) : null}
                  </Button>
                </div>

              </div>
              <Button>
                {comment.image_id === Number(imageId) ? (
                  <DeleteComment imageId={imageId} commentId={comment?.id} />
                ) : null}
              </Button>
            </div>

          )
          )
          }
        </div>
      </div>
    </div>
  )
};



export default DisplayComments;
