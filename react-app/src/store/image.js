const GET_PHOTOS = "image/GET_PHOTOS";
const GET_ONE_PHOTO = "image/GET_ONE_PHOTO";
const DELETE_PHOTO = "image/DELETE_PHOTO";
const UPDATE_PHOTO = "image/UPDATE_PHOTO";
const ADD_ONE_PHOTO = "image/ADD_ONE_PHOTO";
const GET_COMMENTS = 'image/GET_COMMENTS';

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

const getComments = (image) => ({
  type: GET_COMMENTS,
  payload: image,
})


export const getPhotos = () => async (dispatch) => {
  const res = await fetch("/api/images/");
  if (res.ok) {
    const photos = await res.json();
    console.log(photos.images, "photos.images>>>>> store");
    dispatch(getAllPhotos(photos.images));
  }
};



export const getAPhoto = (id) => async (dispatch) => {
  const res = await fetch(`/api/images/${id}`);
  if (res.ok) {
    const photo = await res.json();
    dispatch(getOnePhoto(photo));
  }
};

// export const getImageComments = (id) => async (dispatch) => {
//   const res = await fetch(`/api/images/${id}/comments`);
//   if (res.ok) {
//     const photo = await res.json();
//     dispatch(getComments(photo));
//   }
// };



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
      addingState[action.payload.id] = action.payload;
      return addingState;
    case GET_ONE_PHOTO:
      return { ...action.payload };
    case UPDATE_PHOTO:
      const updateState = { ...action.payload };
      return updateState;
    case GET_COMMENTS:
      const commentState = { ...state }
      commentState[action.payload.id] = action.payload
      return commentState;
    case DELETE_PHOTO:
      const removeState = { ...state };
      delete removeState[action.payload.id];
      return removeState;
    default:
      return state;
  }
}
