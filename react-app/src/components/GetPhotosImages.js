import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllVotes, postNewVotes } from "../store/vote";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPhotos } from "../store/image";

function GetPhotosImages({ locationId }){
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const images = useSelector((state) => Object.values(state.image));

  console.log(images, "<><><><images OBJ<><><><><");

  useEffect(() => {
    dispatch(getPhotos(Number(locationId)));
  }, [dispatch, locationId]);

  const locationsPictures = images.map((image) => {
    return (
      <>
        <div key={image.id}>
          <p>{image.title}</p>
          <img src={image.image} alt='_blank'></img>
          <p>{image.location_id}</p>
        </div>
      </>
    );
  });
  return (
    <>
      <h1>{locationsPictures}</h1>
    </>
  );
};

export default GetPhotosImages;
