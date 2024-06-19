const GET_PHOTOS = "images/GET_PHOTOS";
const GET_ONE_PHOTO = "image/GET_ONE_PHOTO";
const DELETE_PHOTO = "image/DELETE_PHOTO";
const UPDATE_PHOTO = "image/UPDATE_PHOTO";
const ADD_ONE_PHOTO = "image/ADD_ONE_PHOTO";
const ADD_IMAGE_COMMENT = 'image/ADD_IMAGE_COMMENT';

const getOnePhoto = (image) => ({
  type: GET_ONE_PHOTO,
  payload: image,
});

const getAllPhotos = (images) => ({
  type: GET_PHOTOS,
  payload: images,
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

// const postComment = (image) => ({
//   type: ADD_IMAGE_COMMENT,
//   payload: image,
// })


export const getPhotos = (id) => async (dispatch) => {
  const res = await fetch("/api/images/");
  if (res.ok) {
    const photos = await res.json();
    console.log(photos.images, "photos.images>>>>> store")
    dispatch(getAllPhotos(photos.images));
  }
};



export const getAPhoto = (id) => async (dispatch) => {
  const res = await fetch(`/api/images/${id}`);
  if (res.ok) {
    const photo = await res.json();
    console.log(photo, "photo from image store-<>>>>>>>getAPhoto thunk")
    dispatch(getOnePhoto(photo));
  } else {
    console.log('erroring from store')

  }
};





export const addImage = (formData) => async (dispatch) => {
  const res = await fetch("/api/images/new-image", {
    method: "POST",
    body: formData,

  });
  if (res.ok) {
    const imageObj = await res.json();
    dispatch(addOnePhoto(imageObj));
  } else {
    console.log('error res is not okay in addimage')
  }
};
export const postNewPhoto =
  (image, title, user_id, location_id) => async (dispatch) => {
    image = image.url
    const res = await fetch("/api/images/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image, title, user_id, location_id }),
    });
    if (res.ok) {
      const image = await res.json();
      dispatch(addOnePhoto(image));
    } else {
      console.log('image Not Added - Error');
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


export const deletePhoto = (id) => async (dispatch) => {
  const res = await fetch(`/api/images/delete/${id}`, {
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
      let currentState = {};
      action.payload.forEach((image) => {
        currentState[image.id] = image;
      });
      return currentState;
    case ADD_ONE_PHOTO:
      const addingState = { ...state };
      addingState[action.payload?.id] = action.payload;
      return addingState;
    case GET_ONE_PHOTO:
      return { ...action.payload };
    case UPDATE_PHOTO:
      const updateState = { ...state };
      updateState[action.payload?.id] = action.payload;
      return updateState;
    case DELETE_PHOTO:
      const removeState = { ...state };
      delete removeState[action.payload.id];
      return removeState;
    case ADD_IMAGE_COMMENT:
      const targetImage = Object.values(state).find((image) => image.id === action.payload.image_id)
      if (targetImage.comments) {
        const comments = [...targetImage.comments, action.payload]
        targetImage.comments = comments;
      } else {
        targetImage.comments = [action.payload]
      }
      const newState = JSON.parse(JSON.stringify(state))
      return newState;
    default:
      return state;
  }
}
