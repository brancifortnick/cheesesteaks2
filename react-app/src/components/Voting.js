import React, { useState } from "react";
import { useSelector } from "react-redux";

const VoteCounter = () => {

  const user = useSelector(state => state.session.user)


  const [vote, setVote] = useState(0);
  const [downVote, setDownVote] = useState(0);

  return (
    <div>
      <p>{vote}</p>
      <button onClick={() => setVote(vote + 1)}>Upvote</button>
      <p>{downVote}</p>
      <button onClick={() => setDownVote(downVote + 1)}>downVote</button>
    </div>
  );
};


export default VoteCounter;
