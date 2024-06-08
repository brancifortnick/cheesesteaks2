import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getAPhoto, getPhotos } from "../store/image";




const Image = () => {

    const location = useSelector(state => state.location)
    const images = useSelector((state) => Object.values(state.image))
    const { locationId } = useParams()
    console.log(locationId, images)

    const filterImages = images.map((each) => {

        return (
            <div>
                <div>

                </div>
                <div>{each.title}</div>
                <img src={each.image} alt='image-not-loading' />
            </div>
        )
    })

    return (
        <>
            {filterImages}
        </>
    )
}
export default Image;
