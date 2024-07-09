const GET_LOCATIONS = "locations/GET_LOCATIONS";
const GET_ONE = "location/GET_ONE";
const ADD_LOCATION = "location/ADD_LOCATION";
const DELETE_LOCATION = "location/DELETE_LOCATION";
const UPDATE_BIOGRAPHY = "location/UPDATE_BIOGRAPHY";
// const ADD_IMAGE = "musician/ADD_IMAGE"; -- put route for image updating
const getAllLocs = (locations) => ({
  type: GET_LOCATIONS,
  payload: locations,
});
const getOne = (location) => ({
  type: GET_ONE,
  payload: location,
});
const addPlace = (location) => ({
  type: ADD_LOCATION,
  payload: location,
});
const deleteLocation = (location) => ({
  type: DELETE_LOCATION,
  payload: location,
});
const updateBio = (location) => ({
  type: UPDATE_BIOGRAPHY,
  payload: location,
});
export const getAllLocations = (id) => async (dispatch) => {
  const res = await fetch(`/api/locations/`);
  if (res.ok) {
    const data = await res.json();
    dispatch(getAllLocs(data.locations));
    // return data;
  } else {
    console.log('no!!!- not getting locations')
  }
};
export const postNewLocation =
  (profile_img, biography, user_id, location_name) => async (dispatch) => {
    profile_img = profile_img.url;
    const res = await fetch("/api/locations/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ profile_img, biography, user_id, location_name }),
    });
    if (res.ok) {
      const location = await res.json();
      dispatch(addPlace(location));
    } else {
      console.log('location Not Added - Error');
    }
  };
export const getOneLocation = (id) => async (dispatch) => {
  const res = await fetch(`/api/locations/${id}`);
  if (res.ok) {
    const data = await res.json();
    dispatch(getOne(data));
  } else {
    console.log('error from location store')
  };
}
// export const getSeveralLocationPics = (id) => async (dispatch) => {
//   const res = await fetch(`/api/locations/${id}/locations-pictures`);
//   if (res.ok) {
//     const data = await res.json();
//     dispatch(getAllLocs(data.locations));
//   } else {
//     console.log('no!!!- not getting serveral pics')
//   }
// };
export const deleteOneLocation = (id) => async (dispatch) => {
  const res = await fetch(`/api/locations/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteLocation(id));
  } else {
    console.log("Establishment Can't be deleted");
  }
};
export const updateBiography = (formData, locationId) => async (dispatch) => {
  const response = await fetch(`/api/locations/${locationId}/biography`, {
    method: "PUT",
    body: formData,
  });
  if (response.ok) {
    const biography = await response.json();
    dispatch(updateBio(biography));
  }
};
const initialState = {};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATIONS:
      let newState = {};
      action.payload.forEach((location) => {
        newState[location.id] = location;
      });
      return newState;
    case ADD_LOCATION:
      const addState = { ...state };
      addState[action.payload.id] = action.payload;
      return addState;
    case GET_ONE:
      return { ...action.payload };
    case DELETE_LOCATION:
      const currentState = { ...state };
      delete currentState[action.payload.id];
      return currentState;
    case UPDATE_BIOGRAPHY:
      return { ...action.payload };
    default:
      return state;
  }
}
