import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPhotos } from "../store/image";
import AddComments from "./AddComments";
import './GetLocationsImages.css'

function GetLocationsImages() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const images = useSelector((state) => Object.values(state.image));
  // const { id } = useParams();
  console.log(images, "<><><><images OBJ<><><><><");

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  const locationsPictures = images.map((image) => {
    return (
      <div className="locations-pictures-container">
        <div key={image.id}>

          <p className="image-title">{image.title}</p>
          <p className="image-location-id">{image.location_id}</p>
          <img className='locations-pictures' src={image.image} alt='_blank'></img>
        </div>
      </div>
    );
  });
  //images.map here to get imageId
  return (
    <>
      {locationsPictures}
    </>
  );
};

export default GetLocationsImages;
