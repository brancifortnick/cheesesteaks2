import React, { useEffect, useState } from "react";
import { getAllVotes } from "../store/vote";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


const VotingRefactor = ({ locationId }) => {

    const [vote, setVote] = useState(0);
    const history = useHistory();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);


    const handleSubmit = (e) => {

        const formData = new FormData()
        formData.append("vote", vote)
        formData.append('downvote', downvote)
        formData.append("user_id", userId)
    }


    useEffect(() => {
        dispatch(getAllVotes(locationId))
    }, [dispatch, locationId])

    return (
        <div>


        </div>
    )
}



export default VotingRefactor;