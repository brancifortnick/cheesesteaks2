import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteOneLocation, getAllLocations } from "../store/location";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

const DeleteEstablishment = ({ locationId }) => {
    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(deleteOneLocation(Number(locationId)));

    };
    useEffect(() => {
        dispatch(getAllLocations())
    }, [dispatch, locationId])
    return (
        <div>
            <Box sx={{ m: -2.3 }}>
                <Button size='medium' onClick={onSubmit}>
                    <DeleteIcon color='disabled' sx={{color: 'red'}}  />
                </Button>
            </Box>
        </div>
    )
};
export default DeleteEstablishment;
