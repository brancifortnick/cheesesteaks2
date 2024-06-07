import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getAPhoto, getPhotos } from "../store/image";




const Image = ({ images }) => {

    const location = useSelector(state => state.location)
    const image = useSelector((state) => state.image)
    const { locationId } = useParams()
    console.log(locationId, image)

    const filterImages = images.map((each) => {

        return (
            <div>
                <div>

                </div>
                <img src={each.image} />
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
