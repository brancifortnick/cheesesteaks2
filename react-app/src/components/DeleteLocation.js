import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getOneLocation,
  deleteOneLocation
} from "../store/location";
import Button from '@mui/material/Button'
import { Box } from "@mui/material";
const DeleteLocation = ({ locationId }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(deleteOneLocation(Number(locationId)));
    history.push('/locations/')
  };

  useEffect(() => {
    dispatch(getOneLocation(Number(locationId)));
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