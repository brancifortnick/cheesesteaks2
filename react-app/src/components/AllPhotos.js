import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getPhotos } from "../store/image";
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { getTheComments } from "../store/comment";
import DisplayComments from "./DisplayComments";



function AllPhotos() {
    const dispatch = useDispatch();
    const images = useSelector((state) => Object.values(state.image));
    const user = useSelector((state) => state.session.user);
    useEffect(() => {
        dispatch(getPhotos());
        dispatch(getTheComments())
    }, [dispatch]);

    const photosList = images.map((image, idx) => {
        return (
            <div className="images-container">
                <div key={idx} id='image-key'>
                    <div className="image-div-container">
                        <Card sx={{ maxWidth: 450, maxHeight: 'auto' }}>
                            <NavLink to={`/images/${image.id}`}>
                                <CardMedia
                                    component="card-img-style"
                                    src={image.image}
                                    alt="establishment"
                                />
                                <img src={image.image} className='images-photos' alt='loading...' />
                            </NavLink>
                        </Card>
                        {/* <DisplayComments imageId={image.id} />> */}
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            {photosList}
        </>
    )
}
export default AllPhotos;
