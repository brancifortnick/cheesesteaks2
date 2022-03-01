import React, { useState, useCallback, useEffect, useRef } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

const GoogleLocation= () => {

const UserPositionString =  useSelector(state => state.session.user.geolocation);
const currentUser = useSelector(state => state.session.user)

const [users, setUsers] = useState([]);

function ChangeUserPos(StringPos) {
  if (!StringPos) return null

  let finalObj = {lat:null, lng:null}
  let array = StringPos.split(',')

  finalObj.lat = +array[0]
  finalObj.lng = +array[1]

  return finalObj
}


const UserPosition = ChangeUserPos(UserPositionString)

// console.log("---------", (UserPosition))


//This sets the center of the map. This must be set BEFORE the map loads


// This is the equivalent to a script tag

const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_MAPS_KEY // process.env.GOOGLE_MAPS_API_KEY ???
})

// console.log("--------------------------------------------------", process.env)

const containerStyle = {

    width: '100%',
    height: '950px'
  };

const [map, setMap] = useState(null)

const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])


    return UserPosition && (
      // Important! Always set the container height explicitly
      <div className="">



        <div className="theMap">

          {isLoaded && <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={19}
            center={UserPosition}
            onUnmount={onUnmount}
            mapTypeId= 'hybrid'
            >



            {users.map(each => (
              <Marker user={each} ChangeUserPos={ChangeUserPos}/>
              ))}



            </GoogleMap>}
          </div>

        </div>
    );

}

export default GoogleLocation;
