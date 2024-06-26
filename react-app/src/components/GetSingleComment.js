// import React, { useContext, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getOneComment, getImagesComments, getTheComments } from "../store/comment";
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';
// import DeleteComment from "./DeleteComment";
// import EditComment from "./EditComment";

// function GetSingleComment() {

//     const dispatch = useDispatch();
//     const comments = useSelector((state) => Object.values(state.comment));

//     const user = useSelector((state) => state.session.user);
//     const images = useSelector(state => Object.values(state.image))
//     const location = useSelector(state => state.location)

//     const image = useSelector(state => state.image)



//     //! this is getting all the comments ???? it should be returning single comment based off of a map or filter or both




//     return (

//         <div>
//             {comments.map((comment) => {
//                 <div key={comment.id}>

//                     <li>{comment.comment}</li>
//                     <li>{comment.image_id}</li>


//                     {comment.image_id ? (

//                         console.log('whats happenin')
//                     ) : null}


//                     <ButtonGroup disableElevation variant="contained">
//                         {/* {comment?.user_id === user?.id ? (
//                             <Button> <EditComment commentId={comment.id} /> </Button>
//                         ) : null} */}

//                         {console.log(comment.image_id, "comment.image_id?>>>>>>>")}
//                         {comment.user_id === user?.id ? (
//                             <Button >
//                                 <DeleteComment commentId={comment.id} />

//                             </Button>
//                         ) : null}

//                     </ButtonGroup>
//                 </div >
//             })}
//         </div >
//     )
// }




// export default GetSingleComment;
