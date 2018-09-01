import axios from 'axios';

// Action Types
const GOT_CAMPUSES = 'GOT_CAMPUSES';

// Action Creators
const gotCampuses = campuses => ({
  type: GOT_CAMPUSES,
  campuses,
});

// Thunks
export const getCampuses = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/campuses');
    dispatch(gotCampuses(data));
  };
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case GOT_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};

export default reducer;
