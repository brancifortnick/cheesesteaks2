const GET_VOTES = "vote/GET_VOTES";
const ADD_VOTES = "vote/ADD_VOTES";
const EDIT_VOTES = 'vote/EDIT_VOTES';

const getVotes = (vote) => ({
  type: GET_VOTES,
  payload: vote,
});
const postVotes = (vote) => ({
  type: ADD_VOTES,
  payload: vote,
})
const editTheVotes = (vote) => ({
  type: EDIT_VOTES,
  payload: vote,
})


//! these are new redux thunks for vote counts

export const increment = () => {
  return {
    type: 'INCREMENT'

  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',

  };
};





export const getAllVotes = () => async (dispatch) => {
  const res = await fetch("/api/votes/");
  if (res.ok) {
    const data = await res.json();
    dispatch(getVotes(data.votes))
  }
};
export const postNewVotes = (formData) => async (dispatch) => {
  const res = await fetch(`/api/vote`, {
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    const vote = await res.json();
    dispatch(postVotes(vote))
  }
};


const initialState = { count: 0 };
//make state = initial state? or 0
export default function counter(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };
    case GET_VOTES:
      let currentVals = {}
      action.payload.forEach((vote) => {
        currentVals[vote?.id] = vote
      })
      return currentVals;
    case ADD_VOTES:
      const currentStateOfVotes = { ...state }
      currentStateOfVotes[action.payload] = action.payload
      return currentStateOfVotes;
    default:
      return state
  }
}
