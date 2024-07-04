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
import DeleteEstablishment from '../components/DeleteLocationModal'
import { getImagesComments, getOneComment, getTheComments } from "../store/comment";
import Grid from "@mui/material/Grid";
import DeleteLocationsImages from "./DeleteLocationsImages";
import "./Locations.css";

import { Modal } from "../context/Modal";
import { getPhotos } from "../store/image";

import AllImagesRefactor from './AllImagesRefactor';
import ImageUpload from "./ImageUpload";
import { Folder } from "@mui/icons-material";
import AllPhotos from "./AllPhotos";
import Accordian from "./Accordian/Accordian";
import VoteCounter from './VoteCounter'
import { getAllVotes } from "../store/vote";



function Locations() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const userId = useSelector((state) => state.session.user?.id);

  const [showModal, setModal] = useState(false)

  const comment = useSelector((state) => (state.comment));
  const location = useSelector((state) => state.location);

  const images = useSelector(state => Object.values(state.image))



  const { locationId } = useParams()





  useEffect(() => {
    dispatch(getOneLocation((locationId)));
    dispatch(getPhotos(locationId))
    dispatch(getAllVotes())

  }, [dispatch, locationId]);

  return (
    <>
      <div className="card-container">

        <div className="description-div">

          {location.profile_img !== null ? (
            <Box>
              <img src={location.profile_img} alt='...loading' />

            </Box>
          ) : null
          }
          <div>
            <ImageUpload locationId={locationId} />
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

          <AllImagesRefactor images={images} locationId={locationId} />
          {/* <VoteCounter locationId={location.id} /> */}
        </div>
      </div>
    </>
  )
};




export default Locations;
