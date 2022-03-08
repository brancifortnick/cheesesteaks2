const GET_PHOTOS = "image/GET_PHOTOS";
const GET_ONE_PHOTO = "image/GET_ONE_PHOTO";
const DELETE_PHOTO = "image/DELETE_PHOTO";
const UPDATE_PHOTO = "image/UPDATE_PHOTO";
const ADD_ONE_PHOTO = "image/ADD_ONE_PHOTO";

const getOnePhoto = (image) => ({
  type: GET_ONE_PHOTO,
  payload: image,
});

const getAllPhotos = (image) => ({
  type: GET_PHOTOS,
  payload: image,
});

const addOnePhoto = (image) => ({
  type: ADD_ONE_PHOTO,
  payload: image,
});

const deleteOnePhoto = (image) => ({
  type: DELETE_PHOTO,
  payload: image,
});

const updateOnePhoto = (image) => ({
  type: UPDATE_PHOTO,
  payload: image,
});

export const getPhotos = () => async (dispatch) => {
  const res = await fetch("/api/images/");
  if (res.ok) {
    const photos = await res.json();
    console.log(photos.images, "photos.images>>>>> store");
    dispatch(getAllPhotos(photos.images));
  }
};

export const editImage = (formData, id) => async (dispatch) => {
  const res = await fetch(`/api/images/${id}`, {
    method: "PUT",
    body: formData,
  });
  if (res.ok) {
    const imageUpdate = await res.json();
    dispatch(updateOnePhoto(imageUpdate));
  }
};

export const getAPhoto = (id) => async (dispatch) => {
  const res = await fetch(`/api/images/${id}`);
  if (res.ok) {
    const photo = await res.json();
    dispatch(getOnePhoto(photo));
  }
};

export const addImage = (userId, locationId, image, title) => async (dispatch) => {
  image = image.url //<=== necessary?
  const res = await fetch("/api/images/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, locationId, image, title }),
  });
  if (res.ok) {
    const image = await res.json();
    dispatch(addOnePhoto(image));
  } else {
    console.log("store ERROR---addIMAGE");
  }
};

export const deletePhoto = (id) => async (dispatch) => {
  const res = await fetch(`/api/images/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    const removeData = await res.json();
    dispatch(deleteOnePhoto(removeData));
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTOS:
      const currentState = {};
      action.payload.forEach((image) => {
        currentState[image.id] = image;
      });
      return currentState;

    case ADD_ONE_PHOTO:
      const addingState = { ...state };
      addingState[action.payload.id] = action.payload;
      return addingState;

    case GET_ONE_PHOTO:
      return { ...action.payload };

    case UPDATE_PHOTO:
      const updateState = { ...action.payload };
      //   updateState[action.payload.id] = action.payload;
      return updateState;

    case DELETE_PHOTO:
      const removeState = { ...state };
      delete removeState[action.payload.id];
      return removeState;

    default:
      return state;
  }
}
