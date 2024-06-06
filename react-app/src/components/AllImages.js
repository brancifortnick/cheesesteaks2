import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getAPhoto, getPhotos } from "../store/image";





const AllImages = () => {


    const images = useSelector(state => Object.values(state.image))
    const currentUser = useSelector((state) => state.session.user);
    console.log(images, "images from Allimages", currentUser, "currentUser from allimages()()()()")
    // const locations = useSelector(state => (state.location))
    // console.log(locations, "locationState from allImages")
    const { locationId } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPhotos())
    }, [dispatch])

    const imageList = (images).map((idx, image) => {
        return (
            <div key={idx}>
                <div>
                    {image.title}
                </div>
                <div>
                    <img alt='...loading' src={image.image} ></img>


                </div>
            </div>
            // ) : null;
        )
    });
    return (
        <>
            {imageList}
        </>
    )

};


export default AllImages;
