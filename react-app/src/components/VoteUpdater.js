import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { editVotes, getAllVotes, postNewVotes } from "../store/vote";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'



function VoteUpdater() {

    const { locationId } = useParams()
    const currentVotes = useSelector(state => Object.values(state.vote))
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();


    const [vote, setVote] = useState(0);
    const [downvote, setDown] = useState(0);
    const [user_id, setTheUser] = useState("")

    // (async()=> {
    //     return user.id === currentVotes.map((location)=> location.id  ? setTheUser(user_id) : null) //writing and IIFE FOR SHITS --- thinking about voting logic upcoming
    // })();


    const updateTheVotes = async (e) => {

        const formData = new FormData()

        formData.append('vote', vote);
        formData.append('downvote', downvote);
        formData.append('user_id', user.id)

        setVote(vote);
        setDown(downvote);
        dispatch(editVotes(formData, locationId))

    }


    const getVotesForLocations = currentVotes.filter((votes) => {
        return (
            <div key={votes.id}>
                {votes.vote}
                {votes.downvotes}
            </div>
        )
    })

    return (
        <>
            <button onClick={updateTheVotes}>Vote</button>
            {getVotesForLocations}
        </>
    )
};


export default VoteUpdater;