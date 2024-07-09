// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { NavLink } from "react-router-dom";
// import { getPhotos, getAPhoto } from "../store/image";
// const GetLocationsImages = () => {
//   const images = useSelector((state) => Object.values(state.image));
//   const dispatch = useDispatch();
//   const location = useSelector(state => state.location)
//   useEffect(() => {
//     dispatch(getPhotos());
//   }, [dispatch]);
//   const locationsPhotos = images.map((index, image) => {
//     return (
//       <div key={index}>
//         <NavLink to={`/locations/${location.id}/images/${image.id}`}> </NavLink>
//         <div>{image.title}</div>
//         <img alt="_blank" src={image.image}></img>
//       </div>
//     );
//   });
//   return <>{locationsPhotos}</>;
// };
// export default GetLocationsImages;
