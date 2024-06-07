import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getOneLocation,
  deleteOneLocation,
  getAllLocations
} from "../store/location";
import Button from '@mui/material/Button'
import { Box } from "@mui/material";
const DeleteLocation = ({ locationId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(deleteOneLocation(Number(locationId)));

    const message = (msg) => alert(msg)
    let msg = 'hey did this update the deleted object'
    msg ? message() : console.log('message function failing')
    history.push('/locations')
  };

  useEffect(() => {
    dispatch(getAllLocations());

  }, [dispatch, locationId]);

  return (
    <div id="delete-Location-div">
      <Box sx={{ alignContent: "center", mx: "auto", maxWidth: '300px', borderRadius: '6px', textAlign: 'center', backgroundColor: 'white' }}>
        <Button onClick={onSubmit} id="delete-location-btn">
          Delete album and its contents
        </Button>
      </Box>

    </div >
  );
};
export default DeleteLocation;
