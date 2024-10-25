const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action creators
export const increment = () => ({
  type: INCREMENT,
});
export const decrement = () => ({
  type: DECREMENT,
});

// Reducer
const initialState = { vote: 0 };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // case GET_VOTES: {
    //   const voteState = {}
    //   action.payload.forEach((vote) => {
    //     voteState[vote?.id] = vote
    //   });
    //   return voteState
    // };
    case INCREMENT:
      return { vote: state.vote + 1 };
    case DECREMENT:
      return { vote: state.vote - 1 };
    default:
      return state;
  }
}

//NO NEED FOR THIS NONSENSE I WAas not thinking clearly

// const GET_VOTES = "vote/GET_VOTES";
// const ADD_VOTES = "vote/ADD_VOTES";
// const EDIT_VOTES = 'vote/EDIT_VOTES';

// const getVotes = (vote) => ({
//   type: GET_VOTES,
//   payload: vote,
// });
// const postVotes = (vote) => ({
//   type: ADD_VOTES,
//   payload: vote,
// })
// const editTheVotes = (vote) => ({
//   type: EDIT_VOTES,
//   payload: vote,
// })

// //! these are new redux thunks for vote counts

// export const increment = () => {
//   return {
//     type: 'INCREMENT'

//   };
// };

// export const decrement = () => {
//   return {
//     type: 'DECREMENT',

//   };
// };

// export const getAllVotes = () => async (dispatch) => {
//   const res = await fetch("/api/votes/");
//   if (res.ok) {
//     const data = await res.json();
//     dispatch(getVotes(data.votes))
//   }
// };
// export const postNewVotes = (formData) => async (dispatch) => {
//   const res = await fetch(`/api/vote`, {
//     method: "POST",
//     body: formData,
//   });
//   if (res.ok) {
//     const vote = await res.json();
//     dispatch(postVotes(vote))
//   }
// };
