import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { editVotes, getAllVotes, postNewVotes } from "../store/vote";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAPhoto } from "../store/image";
import { getAllLocations } from "../store/location";
import VoteUpdater from "./VoteUpdater";

const VoteCounter = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const location = useSelector(state => (state.location))
const {locationId} = useParams 
  console.log(locationId, '<<<<<<<<<<<<<<<<locationId inside VOTECOUNER?????????')

  const [vote, setVote] = useState(0); // be cautious of this useState
  const [downvote, setDownVote] = useState(0);


  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("vote", vote);
    formData.append("downvote", downvote);
    formData.append('location_id', parseInt(locationId))
    formData.append('user_id', user.id)
    dispatch(editVotes(formData, locationId))
    
  };

  useEffect(()=> {
    dispatch(getAllVotes(Number(locationId)))
  },[dispatch])


  const down = () => {
    setDownVote(downvote => downvote-=1);
  };
  const up = () => {
    setVote(vote => vote += 1);
  };



  // should i be using a form => also should this be an onChange Event vs a click event i think so
  return (
    <form onSubmit={onSubmit}>
    <>
   
      <div>
        <button onClick={down}>downvote</button> 
        {downvote}
      </div>
      <div>
   
        <button onChange={up}>vote</button> {`onchange event and theres an onclick above so i remember`}
        {vote}
      </div>
    </>
    </form>
  );
};

export default VoteCounter;
