import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllComments, getImageComments } from '../store/comment'
import DeleteComment from './DeleteComment';
import EditComment from "./EditComment";

function AllComments() {

    const dispatch = useDispatch()
    const image = useSelector(state => (state.image))



    console.log(image, "ALLCOMMENTS======= image obj")
    const comments = useSelector(state => Object.values(state.comment))
    const user = useSelector(state => state.session.user)

//    let imageObj = Object.values(image).filter(image=> image.id === comments.image_id);
//     console.log(imageObj, "imageOBJ creation")
    //comments.image_id === image.id

    // console.log(imageId, '<<<<<<<<<<imageID')
    useEffect(() => {
        dispatch(getAllComments())
    }, [dispatch])

    return (
        <div id="comment-div">
            {comments?.map((comment) => (
                <div key={comment.id}>
                    {/* <div>
                        {comment?.username}
                    </div> */}
                    <div className="user-object--content">
                        {comment?.comment}

                        {comment?.user_id === user?.id
                            ? <div className="button--buttons-container">

                                <EditComment commentId={comment.id} />
                                <DeleteComment commentId={comment.id} />
                            </div>
                            : null
                        }
                    </div>
                </div>)
            )}
        </div>
    )
};
export default AllComments;
