import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneComment } from "../store/comment";
import { getPhotos } from "../store/image";
import AddComments from "./AddComments";
import DeleteLocationsImages from "./DeleteLocationsImage";
import './GetLocationsImages.css'

function GetLocationsImages({ locationId }) {
  console.log(locationId, "locatioID coming from GETlocationsImages")
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const images = useSelector((state) => Object.values(state.image));
 const location = useSelector(state => (state.location))
 console.log(location, 'LOCATION from getlocationsimages')
  console.log(images, "<><><><images OBJ<><><><><");

  useEffect(() => {
    dispatch(getPhotos(Number(locationId)));
    dispatch(getOneComment(Number(locationId)))
  }, [dispatch, locationId]);

  const locationsPictures = images.map((image) => {
   return image.location_id === location.id ? (
// return (
      <div className="locations-pictures-container">
        <div key={image.id}>

          <p className="image-title">{image.title}</p>
          <p className="image-location-id">{image.location_id}</p>
          <img className='locations-pictures' src={image.image} alt='_blank'></img>
          <AddComments imageId={image.id} locationId={locationId} />
          <DeleteLocationsImages imageId={image.id} locationId={locationId} />
        </div>
      </div>
    ): null;
  });
  //images.map here to get imageId
  return (
    <>
      {locationsPictures}
    </>
  );
};

export default GetLocationsImages;
