import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getPhotos } from "../store/image";
import './GetLocationsImages.css'

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
      <div className="locations-pictures-container">
        <div key={image.id} image={image.id}>
          <p className="image-title">{image.title}</p>
          <p className="image-location-id">{image.location_id}</p>
          <img className='locations-pictures' src={image.image} alt='_blank'></img>
        </div>
      </div>
    );
  });
  return (
    <>
      {locationsPictures}
    </>
  );
};

export default GetLocationsImages;
