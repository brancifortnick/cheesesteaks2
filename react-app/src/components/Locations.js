// import React, { useEffect, useState } from "react";
// import { getOneLocation } from "../store/location";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import UpdateBiography from "./UpdateBiography";
// import DeleteLocation from "./DeleteLocation";
// import Box from "@mui/material/Box";
// import "./Locations.css";
// import { Modal } from "../context/Modal";
// import { getPhotos } from "../store/image";
// import AllImagesRefactor from "./AllImagesRefactor";
// import ImageUpload from "./ImageUpload";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import { CardMedia } from "@mui/material";
// import { ButtonGroup } from "@mui/material";
// import Button from "@mui/material/Button";
// import AllImagesRefactorTwo from "./AllImagesRefactorTwo";

// function Locations() {
//   const dispatch = useDispatch();
//   const currentUser = useSelector((state) => state.session.user);
//   const userId = useSelector((state) => state.session.user?.id);
//   const [showModal, setModal] = useState(false);
//   const comment = useSelector((state) => state.comment);
//   const location = useSelector((state) => state.location);
//   const images = useSelector((state) => Object.values(state.image));
//   const { locationId } = useParams();
//   useEffect(() => {
//     dispatch(getOneLocation(locationId));
//     dispatch(getPhotos(locationId));
//   }, [dispatch, locationId]);
//   return (
//     <>
//       <div className="card-container">
//         {location.profile_img !== null ? (
//           <div className='first-container-children'>
//             <h2> {location.location_name}</h2>
//             <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: 'center', alignItems: 'spaceEvenly', textAlign: 'center' }} >
//               <Card sx={{

//                 borderRadius: '10px',
//                 borderBottom: 'hidden',
//                 boxShadow: '0 4px 6px 0 rgba(3,3, 3, 3)',
//                 backgroundColor: 'rgba(255, 255, 255, 0.75)',

//               }}>

//               <img
//                 className="location-image"
//                 src={location.profile_img}
//                 alt="...loading"
//               />

//               <div className="bio-component-container">
//                 {currentUser.id === Number(location.user_id) ? (
//                   <UpdateBiography
//                     locationBio={location.biography}
//                     locationId={location.id}
//                   />
//                 ) : null}
//                 <p className="location-bio">{location.biography}</p>
//               </div>
//             </Card>
//           </Box>
//           </div>
//         ) : null}

//         <ImageUpload locationId={locationId} />

//         <AllImagesRefactorTwo images={images} locationId={locationId} />
//         </div>
//     </>
//   );
// }
// export default Locations;
