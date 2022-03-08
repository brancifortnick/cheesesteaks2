import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllVotes, postNewVotes } from "../store/vote";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAPhoto } from "../store/image";
import { getAllLocations } from "../store/location";


const VoteCounter = ({locationId}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const location = useSelector(state => (state.location))

  console.log(locationId, '<<<<<<<<<<<<<<<<locationId inside VOTECOUNER?????????')

  const [vote, setVote] = useState(0); // be cautious of this useState
  const [downvote, setDownVote] = useState(0);
  // const [location_id, setLocation] = useState(null)
  // const [user_id, setUser] = useState(null)


  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("vote", vote);
    formData.append("downvote", downvote);
    formData.append('location_id', parseInt(locationId))
    formData.append('user_id', user.id)
    dispatch(postNewVotes(formData))
  };

  useEffect(()=> {
    dispatch(getAllVotes(Number(locationId)))
  },[dispatch,locationId])


  const down = () => {
    setDownVote((downvote) => (downvote -= 1));
  };
  const up = () => {
    setVote((vote) => (vote += 1));
  };
  return (
    // <form onSubmit={onSubmit}>
    <>
      <div>
        <button onChange={down}>-</button>
        {downvote}
      </div>
      <div>
        <button onChange={up}>+</button>
        {vote}
      </div>
    </>
  );
};

export default VoteCounter;
