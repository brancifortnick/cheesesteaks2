import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllVotes, postNewVotes } from "../store/vote";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const GetPhotosVotes = ({imageId}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const votes = useSelector((state) => Object.values(state.vote));
  const image = useSelector((state) => state.image);
  console.log(votes, "votes OBJ");

  useEffect(() => {
    dispatch(getAllVotes());
  }, [dispatch]);

  const photosVotes = votes.map((idx, vote) => {
    return imageId === Number(vote.image_id) ? (
      <>
        <div key={idx}>
          <p>{vote.vote}</p>
          <p>{vote.downvote}</p>
        </div>
      </>
    ) : null;
  });

  return <div>{photosVotes}</div>;
};

export default GetPhotosVotes;
