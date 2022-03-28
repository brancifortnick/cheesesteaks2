import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneComment, getImagesComments, getAllComments } from "../store/comment";
import { getPhotos } from "../store/image";
import AddComments from "./AddComments";
import AllComments from "./AllComments";
import DeleteLocationsImages from "./DeleteLocationsImage";
import './GetLocationsImages.css'

function GetLocationsImages({ locationId }) {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const images = useSelector((state) => Object.values(state.image));

  const location = useSelector(state => (state.location))



  useEffect(() => {
    dispatch(getPhotos(Number(locationId)));


  }, [dispatch, locationId]);

  const locationsPictures = images.map((image) => {
    return image.location_id === location.id ? (
      <div className="locations-pictures-container">
        <div key={image.id} imageId={image.id}>
          <p className="image-title">{image.title}</p>
          <img
            className="locations-pictures"
            src={image.image}
            alt="_blank"
          ></img>
          <AddComments imageId={image.id} locationId={locationId} />
          <AllComments imageId={image.id} locationId={locationId} />
          <div>
            {user.id === image.user_id ? (
              <DeleteLocationsImages
                imageId={image.id}
                locationId={locationId}
              />
            ) : null}
          </div>
        </div>
      </div>
    ) : null;
  });
  //images.map here to get imageId
  return (
    <>
      {locationsPictures}
    </>
  );
};

export default GetLocationsImages;
