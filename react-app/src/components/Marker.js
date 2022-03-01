// import React, { useState } from "react";
// import {
//   GoogleMap,
//   LoadScript,
//   Marker,
//   InfoWindow,
// } from "@react-google-maps/api";

// const GoogleMarker = () => {
//   const [selected, setSelected] = useState({});

//   const whenClicked = (item) => {
//     setSelected(item);
//   };

//   const locations = [
//     {
//       name: "Philadelphia",
//       location: {
//         lat: 39.952584,
//         lng: -75.165221,
//       },
//     },
//   ];

//   return (
//     <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
//       {locations.map((loc) => {
//         return <Marker key={loc.name} position={loc.location} />;
//       })}
//     </GoogleMap>
//   );
// };
// //   return (
// //     <>
// //       <Marker
// //         position={ChangeUserPos(user.geolocation)}
// //         title={user.name}
// //         visible={true}
// //         streetView={false}
// //         onClick={() => setShowInfoWindow((s) => !s)}
// //       >
// //         {showInfoWindow && (
// //           <InfoWindow
// //             className="InfoWindow"
// //             position={user.geolocation}
// //           ></InfoWindow>
// //         )}
// //       </Marker>
// //     </>
// //   );
// // };
