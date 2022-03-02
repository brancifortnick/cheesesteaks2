import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllVotes, postNewVotes } from "../store/vote";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAPhoto } from "../store/image";
import { getAllLocations } from "../store/location";

const VoteCounter = ({imageId}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const image = useSelector(state => (state.image))

  console.log(image, '<<<<<<<<<<<<<<<<imageId inside VOTECOUNER?????????')

  const [vote, setVote] = useState(0); // be cautious of this useState
  const [downvote, setDownVote] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("vote", vote);
    formData.append("downvote", downvote);
    dispatch(postNewVotes(formData))
  };

  useEffect(()=> {
    dispatch(getAllLocations())
  },[dispatch])


  const down = () => {
    setDownVote((downvote) => (downvote -= 1));
  };
  const up = () => {
    setVote((vote) => (vote += 1));
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <button onClick={down}>downvote</button>
        {downvote}
      </div>
      <div>
        <button onClick={up}>upvote</button>
        {vote}
      </div>
    </form>
  );
};

export default VoteCounter;
