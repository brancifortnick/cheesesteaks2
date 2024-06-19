import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { getPhotos } from "../store/image";
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { getTheComments } from "../store/comment";
import DisplayComments from "./DisplayComments";
import { useParams } from "react-router-dom";



function AllPhotos({ locationId }) {
    const dispatch = useDispatch();
    const images = useSelector((state) => Object.values(state.image));
    const user = useSelector((state) => state.session.user);
    // const { locationId } = useParams()

    useEffect(() => {
        dispatch(getPhotos());
        // dispatch(getTheComments())
    }, [dispatch]);

    const photosList = images.map((image, idx) => {
        return (
            <div className="images-container">
                <div key={idx} id='image-key'>
                    <div className="image-div-container">
                        <Card sx={{
                            maxWidth: 300, maxHeight: 300
                        }}>
                            <NavLink to={`/images/${image.id}`}>
                                <img
                                    src={image.image}
                                    alt="loading..."
                                    className="image_card"
                                />
                            </NavLink>
                        </Card>


                        {/* <img src={image.image} className='images-photos' alt='loading...' /> */}


                    </div>
                </div>
            </div>
        )
        // : null
    })
    return (
        <>
            {photosList}
        </>
    )
}
export default AllPhotos;
