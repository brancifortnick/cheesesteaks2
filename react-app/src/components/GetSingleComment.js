import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneComment, getImagesComments } from "../store/comment";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import DeleteComment from "./DeleteComment";
import EditComment from "./EditComment";

function GetSingleComment({ imageId }) {

    const dispatch = useDispatch();
    const comments = useSelector((state) => Object.values(state.comment));
    const comment = useSelector(state => state.comment)
    const user = useSelector((state) => state.session.user);
    const image = useSelector(state => Object.values(state.image))

    console.log(image, 'image coming from getsinglecomment')


    useEffect(() => {
        dispatch(getOneComment(imageId))
    }, [dispatch, imageId])

    return (

        <div>
            {comments.map((comment) => {
                <div key={comment.id}>
                    <li>{comment.comment}</li>
                    <li>{comment.image_id}</li>


                    {image.id === comment.image['id'] ? (

                        console.log('whats happenin')
                    ) : null}


                    <ButtonGroup disableElevation variant="contained">
                        {comment?.user_id === user?.id ? (
                            <Button> <EditComment commentId={comment.id} /> </Button>
                        ) : null}
                        {console.log(comment.image['id'], "doting into getsingle comment comment.image.id")}
                        {console.log(comment.image_id, "comment.image_id?>>>>>>>")}
                        {comment.user_id === user?.id ? (
                            <Button >
                                <DeleteComment commentId={comment.id} />
                                {comment.comment}
                            </Button>
                        ) : null}

                    </ButtonGroup>
                </div >
            })}
        </div >



    )
}




export default GetSingleComment;