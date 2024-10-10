// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../store/vote';
// import { getAllVotes } from '../store/vote';

// const VotingRefactor = () => {


//     const vote = useSelector(state => state.vote);

//     const dispatch = useDispatch();




//     return (
//         <div>
//             <h1>Total Votes</h1>
//             <p>Count: {vote.count}</p>
//             <button onClick={() => dispatch(increment())}>Increment</button>
//             <button onClick={() => dispatch(decrement())}>Decrement</button>
//         </div>
//     );
// }

// export default VotingRefactor;



// useEffect(() => {
//     fetch('/api/vote')
//         .then(response => response.json())
//         .then(data => setCount(data.count));
// }, []);

// const handleVote = (action) => {
//     fetch('/api/vote', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ action })
//     })
//         .then(response => response.json())
//         .then(data => setCount(data.count));
// };



























// import React, { useEffect, useState } from "react";
// import { getAllVotes } from "../store/vote";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";


// const VotingRefactor = ({ locationId }) => {

//     const [vote, setVote] = useState(0);
//     const history = useHistory();
//     const dispatch = useDispatch();
//     const currentUser = useSelector(state => state.session.user);


//     const handleSubmit = (e) => {

//         const formData = new FormData()
//         formData.append("vote", vote)
//         formData.append('downvote', downvote)
//         formData.append("user_id", userId)
//     }


//     useEffect(() => {
//         dispatch(getAllVotes(locationId))
//     }, [dispatch, locationId])

//     return (
//         <div>


//         </div>
//     )
// }



// export default VotingRefactor;


