import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllVotes, postNewVotes } from "../store/vote";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const GetPhotosVotes = ({locationId}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const votes = useSelector((state) => Object.values(state.vote));
  const location = useSelector(state => state.location)
  console.log(votes, "votes OBJ");

  useEffect(() => {
    dispatch(getAllVotes(Number(locationId)));
  }, [dispatch,locationId]);

  const photosVotes = votes.map((idx, vote) => {
    return locationId === Number(vote.location_id) ? (
      <>
        <div key={idx}>
          <p>{vote.vote}</p>
          <p>{vote.downvote}</p>
        </div>
      </>
    ) : null;
  });

  return <div key='votes'>{photosVotes}</div>;
};

export default GetPhotosVotes;
