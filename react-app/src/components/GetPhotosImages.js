import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPhotos } from "../store/image";

function GetLocationsImages() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const images = useSelector((state) => Object.values(state.image));

  console.log(images, "<><><><images OBJ<><><><><");

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

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

export default GetLocationsImages;
