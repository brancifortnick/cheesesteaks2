import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteOneLocation, getAllLocations } from "../store/location";
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

const DeleteEstablishment = ({ locationId }) => {

    const history = useHistory();
    const dispatch = useDispatch();

    //CHECK BOTTOM CSS PROPERTIES USING NEGATIVE MARGIN FOR NOW TO EVEN CARDS

    const onSubmit = async (e) => {
        e.preventDefault();
        dispatch(deleteOneLocation(Number(locationId)));
        history.push('/')
    };

    useEffect(() => {
        dispatch(getAllLocations())
    }, [dispatch, locationId])

    return (
        <div>
            <Box sx={{ m: -2.3 }}>
                <Button size='medium' color='primary' onClick={onSubmit}>
                    <DeleteIcon />
                </Button>
            </Box>
        </div>
    )
};

export default DeleteEstablishment;
