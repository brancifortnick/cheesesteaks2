import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getAPhoto, getPhotos } from "../store/image";
import { getOneLocation } from "../store/location";
import ImageUpload from "./ImageUpload";




const Image = ({ imageId, locationId }) => {

    const dispatch = useDispatch()
    const location = useSelector(state => state.location)
    const user = useSelector(state => state.session?.user)
    const images = useSelector(state => Object.values(state.image))
    // const [images, setImages] = useSelector([])

    console.log(images, imageId, locationId)

    console.log('imageId', imageId, 'image>>><<<<<=====')




    useEffect(() => {
        if (!images) {
            dispatch(getAPhoto(imageId))
        }



    }, [dispatch])
    const imgMap = images.map((img) => {
        return (
            img.image !== null ? (
                <>
                    <div>

                        <div>{img.title}</div>
                        <section>
                            {img.user_id}
                        </section>
                        <section>
                            {img.location_id}
                        </section>
                        <p>{imageId + 'imageId'}</p>
                        <img src={img.image} alt="blank_" ></img>
                    </div>
                </>

            ) : null
        )
    });

    return (
        <div>
            {imgMap}
        </div>
    )
}






export default Image;
