const GET_THE_COMMENTS = "comments/GET_THE_COMMENTS";
const ADD_COMMENT = "comment/ADD_COMMENT";
const GET_ONE_COMMENT = "comment/GET_ONE_COMMENT";
const EDIT_COMMENT = "comment/EDIT_COMMENT";
const ADD_IMAGE_COMMENT = "image/ADD_IMAGE_COMMENT";
const DELETE_IMAGE_COMMENT = "image/DELETE_IMAGE_COMMENT";
const getAllTheComments = (comments) => ({
  type: GET_THE_COMMENTS,
  payload: comments,
});
const getOne = (comment) => ({
  type: GET_ONE_COMMENT,
  payload: comment,
});
// const postComment = (comment) => ({
//   type: ADD_COMMENT,
//   payload: comment,
// });
const postComment = (image) => ({
  type: ADD_IMAGE_COMMENT,
  payload: image,
});
const editComment = (comment) => ({
  type: EDIT_COMMENT,
  payload: comment,
});
const deleteComment = (comment) => ({
  type: DELETE_IMAGE_COMMENT,
  payload: comment,
});
export const getTheComments = () => async (dispatch) => {
  const response = await fetch(`/api/comments/`);
  if (response.ok) {
    const allcomments = await response.json();
    dispatch(getAllTheComments(allcomments.comments));
    return allcomments;
  } else {
    console.log(
      "error from getAllcomments aka getTheComments thunk from store ---Comment",
    );
  }
};
export const createComment = (formData) => async (dispatch) => {
  const res = await fetch(`/api/comments/new`, {
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    const newComment = await res.json();
    dispatch(postComment(newComment));
    console.log(newComment, " after calling postComment");
    return newComment;
  } else {
    console.log("Error-coming from post thunk STORE*******");
  }
};
export const getOneComment = (id) => async (dispatch) => {
  const response = await fetch(`/api/comments/${id}`);
  if (response.ok) {
    const data = await response.json();
    dispatch(getOne(data));
  } else {
    console.log("Can't fetch comments");
  }
};
export const deleteAComment =
  ({ id, image_id }) =>
  async (dispatch) => {
    const res = await fetch(`/api/comments/delete/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      dispatch(deleteComment({ id, image_id }));
    } else {
      console.log("Comment Can't be deleted");
    }
  };
const initialState = {};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_THE_COMMENTS:
      let newComState = {};
      action.payload.forEach((comment) => {
        newComState[comment?.id] = comment;
      });
      return newComState;
    case ADD_COMMENT:
      const curr = { ...state };
      console.log(state, "inside of reducer");
      curr[action.payload.id] = action.payload;
      return curr;
    case GET_ONE_COMMENT:
      const getStateNow = { ...state };
      getStateNow[action.payload.id] = action.payload;
      return getStateNow;
    // case EDIT_COMMENT:
    //   const currState = { ...state }
    //   currState[action.payload.id] = action.payload
    //   return currState;
    default:
      return state;
  }
}
