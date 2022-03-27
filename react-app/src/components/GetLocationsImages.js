import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneComment, getImagesComments, getAllComments} from "../store/comment";
import { getPhotos } from "../store/image";
import AddComments from "./AddComments";
import AllComments from "./AllComments";
import DeleteLocationsImages from "./DeleteLocationsImage";
import './GetLocationsImages.css'

function GetLocationsImages({ locationId }) {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const images = useSelector((state) => Object.values(state.image));
  const image = useSelector(state => state.image)
 const location = useSelector(state => (state.location))
 const comments = useSelector(state => state.comments)


  useEffect(() => {
    dispatch(getPhotos(Number(locationId)));


  }, [dispatch, locationId]);

  const locationsPictures = images.map((image) => {
   return image.location_id === location.id ? (
     <div className="locations-pictures-container">
       <div key={image.id} imageId={image.id}>
         <p className="image-title">{image.title}</p>
         <span>{"im the image id fool"}</span>
         <p>{image.id}</p>
         <img
           className="locations-pictures"
           src={image.image}
           alt="_blank"
         ></img>
         <AddComments imageId={image.id} locationId={locationId} />
         <AllComments imageId={image.id} locationId={locationId} />
         <DeleteLocationsImages imageId={image.id} locationId={locationId} />
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
