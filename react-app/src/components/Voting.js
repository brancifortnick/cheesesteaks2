import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllVotes, postNewVotes } from "../store/vote";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const VoteCounter = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const image = useSelector((state) => state.image);

  const [vote, setVote] = useState(0);
  const [downvote, setDownVote] = useState(0);

  const down = () => {
    setDownVote((downvote) => (downvote -= 1));
  };
  const up = () => {
    setVote((vote) => (vote += 1));
  };
  return (
    <div>
      <div>
        <button onClick={down}>downvote</button>
        {downvote}
      </div>
      <div>
        <button onClick={up}>upvote</button>
        {vote}
      </div>
    </div>
  );
};

export default VoteCounter;
