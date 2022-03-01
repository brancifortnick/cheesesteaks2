import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getOneLocation,
  deleteOneLocation
} from "../store/location";


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
      <button onClick={onSubmit} id="delete-location-btn">
        Delete Establishment
      </button>
    </div>
  );
};

export default DeleteLocation;
