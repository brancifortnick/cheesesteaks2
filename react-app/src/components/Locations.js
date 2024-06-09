import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getOneLocation } from "../store/location";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UpdateBiography from "./UpdateBiography";
import DeleteLocation from "./DeleteLocation";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import AddComments from "./AddComments";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DeleteEstablishment from "./DeleteEstablishment";
import { getImagesComments } from "../store/comment";
import Grid from "@mui/material/Grid";
import DeleteLocationsImages from "./DeleteLocationsImages";
import "./Locations.css";
import DisplayComments from "./DisplayComments";
import { Modal } from "../context/Modal";
import { getPhotos } from "../store/image";
import AllImages from "./AllImages";
import AllImagesRefactor from './AllImagesRefactor';
import ImageUpload from "./ImageUpload";
import { Folder } from "@mui/icons-material";
import Image from './Image';




function Locations() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const userId = useSelector((state) => state.session.user?.id);

  const [showModal, setModal] = useState(false)
  const images = useSelector((state) => Object.values(state.image))
  const comments = useSelector((state) => Object.values(state.comment));
  const location = useSelector((state) => state.location);
  console.log(images, "image from locations.js+++++++++++++++++++++", location, "location from locations.js ++++++++++++++")


  const { locationId } = useParams()
  // const filteredImages = Object.values(images).filter((image) => {
  //   return image.location_id === location.id ? (
  //     <AllImagesRefactor />
  //   ) : null
  // })
  // }

  const image = useSelector(state => state.image)
  console.log(image, "image")


  useEffect(() => {
    dispatch(getOneLocation(Number(locationId)));
    dispatch(getPhotos())
  }, [dispatch, locationId]);
  let imageId;
  return (
    <>
      <div className="card-container">
        <div className="description-div">

          {location.profile_img !== null ? (
            <Box>
              <Avatar sx={{
                alignContent: "flexStart", width: 300, height: 300, maxWidth: '50em',
              }} src={location.profile_img}>
              </Avatar>
            </Box>
          ) : null
          }

          <div>
            {currentUser !== 'unauthorized' ? (
              <ImageUpload userId={userId} imageId={imageId} locationId={location.id} />
            ) : null}
          </div>
          <div id="update-biography">
            {currentUser.id === Number(location.user_id) ? (
              <UpdateBiography

                locationBio={location.biography}
                locationId={location.id}
              />
            ) : null}
          </div>




          <div id="description-text">
            Description
          </div>



        </div>

        <div id="bio">{location.biography}</div>

        <div>

          <AllImagesRefactor locationId={location.id} />

        </div>
      </div>
    </>


  )
};




export default Locations;
