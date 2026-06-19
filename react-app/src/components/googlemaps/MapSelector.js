// MapSelector.jsx
import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const defaultCenter = {
  lat: 39.9526, // default to Philadelphia
  lng: -75.1652
};

function MapSelector({ apiKey, onLocationSelect }) {
  const [marker, setMarker] = useState(null);

  const handleMapClick = async (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarker({ lat, lng });

    // Reverse geocode to get address
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
    );
    const data = await response.json();
    if (data.status === "OK") {
      const address = data.results[0]?.formatted_address || "";
      onLocationSelect(address);
    }
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={12}
        onClick={handleMapClick}
      >
        {marker && <Marker position={marker} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapSelector;
