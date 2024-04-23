import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { getOneComment, getImagesComments, getAllComments } from "../store/comment";
import { getAPhoto, getPhotos } from "../store/image";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import DeleteLocationsImages from "./DeleteLocationsImage";
import './GetLocationsImages.css'
import { getOneLocation } from "../store/location";

function GetLocationsImages() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const images = useSelector((state) => Object.values(state.image));




  const location = useSelector(state => (state.location))
  const comments = useSelector(state => Object.values(state.comment))
  const { locationId } = useParams();

  useEffect(() => {
    dispatch(getPhotos(Number(locationId)))


  }, [dispatch, locationId]);

  const locationsPictures = images.map((image) => {
    return (
      <div className="locations-pictures-container">

        <div key={image.id}>

            <Card sx={{ maxWidth: 300, heigh: 'auto' }}>
              <Typography sx={{ p: 0, mx: 'auto' }} gutterBottom variant="h5" component="div">
                {image.title}
              </Typography>

              <CardMedia
                component='card-img-style'
                height='140'
                image={image.image}
                alt='image loading...'
              />
              <img
                className="locations-pictures"
                src={image.image}
                alt="_blank"
              ></img>


              <CardContent>
                <CardActions>
                  {user.id === image.user_id ? (
                    <DeleteLocationsImages
                      imageId={image.id}
                    />
                  ) : null}
                </CardActions>
              </CardContent>
            </Card>


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
