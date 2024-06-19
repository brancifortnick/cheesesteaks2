import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AddComments from './AddComments';
import DeleteComment from './DeleteComment';
import { getOneComment, getTheComments } from '../store/comment';
import EditComment from './EditComment';
import Button from '@mui/material/Button'
import AllImagesRefactor from './AllImagesRefactor';
import { getAPhoto } from '../store/image';

const DisplayComments = ({ imageId }) => {
  const comments = useSelector((state) => Object.values(state.comment));

  const images = useSelector((state) => Object.values(state.image));

  const user = useSelector(state => state.session.user)
  const image = useSelector(state => state.image)
  const location = useSelector(state => state.location)

  const dispatch = useDispatch()




  useEffect(() => {

    dispatch(getTheComments())

  }, [dispatch])


  return (
    <div id="comment-div">
      <div>

        <div>
          {comments?.map((comment) => (
            <div key={comment.id}>
              <div className="button--buttons-container">
                {comment.comment}
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
