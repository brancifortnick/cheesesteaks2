import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteOneLocation, getAllLocations } from "../store/location";
import DeleteIcon from '@mui/icons-material/Delete';


const DeleteEstablishment = ({ locationId }) => {

    const history = useHistory();
    const dispatch = useDispatch();


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
            <button onClick={onSubmit}><DeleteIcon /></button>
        </div>
    )
};

export default DeleteEstablishment;