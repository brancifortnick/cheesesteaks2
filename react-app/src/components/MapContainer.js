import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import React, { useState } from "react";
// import { useGeolocation } from "./services/getgeo";
// import { useDispatch, useEffect } from "react";
export const MapContainer = () => {
  const [selected, setSelected] = useState({});
  const [count, setCount] = useState(0);
  // const dispatch = useDispatch();
  // const getCoords = useGeolocation();
  //  useEffect(()=> {
  //  dispatch(getCoords())
  //  },[dispatch])
  //  console.log(getCoords.latitude);
  //  console.log(getCoords.longitude)
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };
  const defaultCenter = {
    lat: 39.952584,
    lng: -75.165221,
  };
  const onSelect = (item) => {
    setSelected(item);
  };
  const locations = [
    {
      name: "Pats King Of Steaks",
      location: {
        lat: 39.959353,
        lng: -75.286426,
      },
    },
    {
      name: "Oregon Steaks",
      location: {
        lat: 39.91689,
        lng: -75.16371,
      },
    },
    {
      name: "Dalessandro's Steaks",
      location: {
        lat: 40.02964,
        lng: -75.20564,
      },
    },
    {
      name: "Angelo's Pizzeria",
      location: {
        lat: 39.94088,
        lng: -75.15725,
      },
    },
    {
      name: "Ishkabibble's II",
      location: {
        lat: 39.94218,
        lng: -75.154,
      },
    },
  ];
  return (
    <LoadScript googleMapsApiKey="AIzaSyAcelo-SkZtb2UUrrXHZsjxtA1NZGrsh3g">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        {locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.location}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>{selected.name}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};
