// import React, { useEffect, useState } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import AllComments from '../AllComments';
// import AddComments from '../AddComments';
// const DisplayComments = ({ imageId }) => {
//   const comments = useSelector((state) => Object.values(state.comment));
//   const images = useSelector((state) => Object.values(state.image));
//   const user = useSelector(state => state.session.user)
//   return (
//     <div id="comment-div">
//       {comments?.map((comment) => (
//         <div key={comment.id}>
//           {comment?.image_id === images.id ? (
//             <div className="button--buttons-container">
//               <AllComments imageId={imageId} commentId={comment.id} />
//             </div>
//           ) : null}
//         </div>
//       ))}
//     </div>
//   )
// };
// export default DisplayComments;
