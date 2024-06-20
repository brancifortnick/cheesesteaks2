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

export const getAllVotes = () => async (dispatch) => {
  const res = await fetch("/api/votes/");
  if (res.ok) {
    const data = await res.json();
    dispatch(getVotes(data.votes))
  }
};

export const postNewVotes = (formData) => async (dispatch) => {
  const res = await fetch(`/api/votes/add`, {
    method: "POST",
    body: formData,
  });
  if (res.ok) {
    const vote = await res.json();
    dispatch(postVotes(vote))
  }
};


export const editVotes = (formData, locationId) => async (dispatch) => {

  const res = await fetch(`/api/locations/${locationId}/votes`, {
    method: "PUT",
    body: formData,
  });
  if (res.ok) {
    console.log(res, "resssssss editVotes")
    const votes = await res.json();
    dispatch(editTheVotes(votes))
  } else {
    console.log('didnt make it past res')
  }
}

export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
