export const VOTE_UP = "vote/VOTE_UP";
export const VOTE_DOWN = "vote/VOTE_DOWN";
export const SET_VOTES = "vote/SET_VOTES";
export const SET_LOCATION_VOTES = "vote/SET_LOCATION_VOTES";
export const SET_USER_VOTE = "vote/SET_USER_VOTE";
export const RESET_VOTE = "vote/RESET_VOTE";
export const LOAD_VOTES = "vote/LOAD_VOTES";

// Action Creators
export const voteUp = (itemId) => ({
  type: VOTE_UP,
  payload: { itemId }
});

export const voteDown = (itemId) => ({
  type: VOTE_DOWN,
  payload: { itemId }
});

export const setVotes = (votes) => ({
  type: SET_VOTES,
  payload: votes
});

export const setLocationVotes = (locationId, upvotes, downvotes, percentages = {}) => ({
  type: SET_LOCATION_VOTES,
  payload: { locationId, upvotes, downvotes, ...percentages }
});

export const setUserVote = (itemId, voteType) => ({
  type: SET_USER_VOTE,
  payload: { itemId, voteType }
});

export const resetVote = (itemId) => ({
  type: RESET_VOTE,
  payload: { itemId }
});

export const loadVotes = (votes) => ({
  type: LOAD_VOTES,
  payload: votes
});

// Load votes for a specific location
export const loadLocationVotes = (locationId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/votes/location/${locationId}`);
    if (response.ok) {
      const data = await response.json();
      dispatch(setLocationVotes(
        locationId,
        data.upvotes || 0,
        data.downvotes || 0,
        {
          upvote_percentage: data.upvote_percentage || 0,
          downvote_percentage: data.downvote_percentage || 0,
          rating: data.rating || 'No votes yet',
          rating_class: data.rating_class || 'neutral',
          total: data.total || 0
        }
      ));
      return data;
    }
  } catch (error) {
    console.error('Failed to load votes:', error);
  }
};

// Get user's vote for a location
export const loadUserVote = (locationId, userId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/votes/user/${userId}/location/${locationId}`);
    if (response.ok) {
      const data = await response.json();
      if (data.vote) {
        dispatch(setUserVote(locationId, data.vote.count > 0 ? 'up' : 'down'));
      }
      return data;
    }
  } catch (error) {
    console.error('Failed to load user vote:', error);
  }
};

// Async Actions (if you need backend persistence)
export const submitVote = (locationId, voteType, action, userId) => async (dispatch) => {
  try {
    const response = await fetch(`/api/votes/vote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: action, // 'increment' or 'decrement'
        location_id: locationId,
        vote_type: voteType,
        user_id: userId
      })
    });

    if (response.ok) {
      const data = await response.json();
      // After submitting vote, reload the location's votes to get accurate totals
      await dispatch(loadLocationVotes(locationId));
      return data;
    }
  } catch (error) {
    console.error('Vote submission failed:', error);
  }
};

const initialState = {
  // Structure: { itemId: { upvotes: 0, downvotes: 0, userVote: null } }
  votes: {},
  userVotes: {} // Track what user voted on each item
};

export default function voteReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION_VOTES:
      const { locationId, upvotes, downvotes, upvote_percentage, downvote_percentage, rating, rating_class, total } = action.payload;
      return {
        ...state,
        votes: {
          ...state.votes,
          [locationId]: {
            upvotes: upvotes,
            downvotes: downvotes,
            upvote_percentage: upvote_percentage,
            downvote_percentage: downvote_percentage,
            rating: rating,
            rating_class: rating_class,
            total: total
          }
        }
      };

    case SET_USER_VOTE:
      const { itemId: userVoteItemId, voteType } = action.payload;
      return {
        ...state,
        userVotes: {
          ...state.userVotes,
          [userVoteItemId]: voteType
        }
      };

    case VOTE_UP:
      const { itemId: upItemId } = action.payload;
      return {
        ...state,
        votes: {
          ...state.votes,
          [upItemId]: {
            upvotes: (state.votes[upItemId]?.upvotes || 0) + 1,
            downvotes: state.votes[upItemId]?.downvotes || 0
          }
        },
        userVotes: {
          ...state.userVotes,
          [upItemId]: 'up'
        }
      };

    case VOTE_DOWN:
      const { itemId: downItemId } = action.payload;
      return {
        ...state,
        votes: {
          ...state.votes,
          [downItemId]: {
            upvotes: state.votes[downItemId]?.upvotes || 0,
            downvotes: (state.votes[downItemId]?.downvotes || 0) + 1
          }
        },
        userVotes: {
          ...state.userVotes,
          [downItemId]: 'down'
        }
      };

    case RESET_VOTE:
      const { itemId: resetItemId } = action.payload;
      return {
        ...state,
        userVotes: {
          ...state.userVotes,
          [resetItemId]: null
        }
      };

    case SET_VOTES:
      return {
        ...state,
        votes: action.payload
      };

    case LOAD_VOTES:
      return {
        ...state,
        votes: { ...state.votes, ...action.payload }
      };

    default:
      return state;
  }
}