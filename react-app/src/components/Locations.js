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
  // console.log("filteredImages", (filteredImages))
  // const getIdFromFilter = (filteredImages) => {
  //   for (let each in filteredImages) {
  //     for (let i = 0; i < each.length; i++) {
  //       let imageData = filteredImages[i]
  //       if (imageData.location_id === location.id) {
  //         console.log(imageData, 'imagedata')
  //       } else {
  //         console.log('function dailing=> no data')
  //       }
  //     }
  //   }
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


        {location.profile_img !== null ? (
          <Box >
            <Avatar sx={{
              display: "flex", alignContent: "center", justifyContent: "spaceEvenly", width: 300, height: 300
            }}>
              <img
                // style={{ objectFit: 'contain' }}
                className="card"
                src={location.profile_img}
                alt="image loading..."
              ></img>
            </Avatar>
          </Box>
        ) : null}
        <div>

          <ImageUpload userId={userId} imageId={imageId} locationId={location.id} />

        </div>
        <div id="update-biography">
          {currentUser.id === Number(location.user_id) ? (
            <UpdateBiography

              locationBio={location.biography}
              locationId={location.id}
            />
          ) : null}
        </div>
        {/* <NavLink to={`/images/`}>
          <Image locationId={location.id} images={images} />
        </NavLink> */}

        <div className="description-div">
          <span id="description-text">
            <strong>Description</strong>
          </span>


        </div>

        <p id="bio">{location.biography}</p>

        <div>

          <AllImagesRefactor locationId={location.id} />

        </div>
      </div>
    </>

  )
}

export default Locations;
