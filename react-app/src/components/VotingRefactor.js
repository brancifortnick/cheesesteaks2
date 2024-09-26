import React, { useEffect, useState } from 'react';

const VotingRefactor = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('/api/vote')
            .then(response => response.json())
            .then(data => setCount(data.count));
    }, []);

    const handleVote = (action) => {
        fetch('/api/vote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ action })
        })
            .then(response => response.json())
            .then(data => setCount(data.count));
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => handleVote('increment')}>+</button>
            <button onClick={() => handleVote('decrement')}>-</button>
        </div>
    );
};

export default VotingRefactor;






























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


