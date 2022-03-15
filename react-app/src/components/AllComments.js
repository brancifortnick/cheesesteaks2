import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getImageComments } from '../store/comment'

function AllComments() {

    const dispatch = useDispatch()
    const comments = useSelector(state => Object.values(state.comment))
    const user = useSelector(state => state.session.user)
    const { imageId } = useParams()

    useEffect(() => {
        dispatch(getImageComments(Number(imageId)))
    }, [dispatch, imageId])

    return (
        <div id="comment-div">
            {comments?.map((comment) => (

                <div key={comment.id}>

                    <div>
                        {comment?.username}
                    </div>
                    <div className="user-object--content">
                        {comment?.comment}
                        {/* 
                        {comment?.user_id === user?.id
                            ? <div className="button--buttons-container">
                                <DeleteComment comment={comment.id} />
                                <EditCommentModal comment={comment} />
                            </div>
                            : null
                        } */}
                    </div>
                </div>)
            )}
        </div>
    )
}
export default AllComments;