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
  const { locationId } = useParams();
  // console.log(locationId, '<<<<<<<<<<<<<<<<locationId inside VOTECOUNER?????????')
  const [vote, setVote] = useState(null); // be cautious of this useState
  const [downvote, setDownVote] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("vote", vote);
    formData.append("downvote", downvote);
    formData.append('user_id', user.id)
    formData.append('location_id', Number(locationId))
    dispatch(postNewVotes(formData))
  };
  // useEffect(() => {
  //   // dispatch(editVotes(Number(locationId)))
  //   dispatch(getAllVotes())
  // }, [dispatch, locationId])
  let totalVote = (downvote, vote) => {
    return (downvote) += (vote);
  }
  const down = () => {
    setDownVote(downvote => (downvote) -= 1);
  };
  const up = () => {
    setVote(vote => vote += 1);
  };
  // should i be using a form => also should this be an onChange Event vs a click event i think so
  return (
    <form onSubmit={onSubmit}>
      <>
        <div>
          <button onClick={down} value={down}>downvote</button>
          {Number(downvote)}
        </div>
        <div>
          <button onClick={up} value={vote}>vote</button>
          {Number(vote)}
        </div>
        <h2>totalvote: {totalVote(downvote, vote)}</h2>
      </>
    </form>
  );
};
export default VoteCounter;
