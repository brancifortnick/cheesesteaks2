import React, { useState } from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";

const Marker = ({ user, ChangeUserPos }) => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);

  return (
    <>
      <Marker
        position={ChangeUserPos(user.geolocation)}
        title={user.name}
        visible={true}
        streetView={false}
        onClick={() => setShowInfoWindow((s) => !s)}
      >
        {showInfoWindow && (
          <InfoWindow
            className="InfoWindow"
            position={user.geolocation}
          ></InfoWindow>
        )}
      </Marker>
    </>
  );
};
