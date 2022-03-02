const GET_VOTES = "vote/GET_VOTES";
const ADD_VOTES = "vote/ADD_VOTES";

const getVotes = (vote) => ({
  type: GET_VOTES,
  payload: vote,
});

const postVotes = (vote) => ({
    type: ADD_VOTES,
    payload: vote,
})

export const getAllVotes = () => async (dispatch)=>{
  const res = await fetch("/api/votes/");
  if (res.ok) {
    const votes = await res.json();
    dispatch(getVotes(votes.votes))
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


const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_VOTES:
      const current = {};
      action.payload.forEach((vote) => {
        current[vote.id] = vote;
      });
      return current;
    case ADD_VOTES: {
      return { ...action.payload };
    }
    default:
      return state;
  }
}
