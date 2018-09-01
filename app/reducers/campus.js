import axios from 'axios';

// Action Types
const GOT_CAMPUS = 'GOT_CAMPUS';

// Action Creators
const gotCampus = campus => ({ type: GOT_CAMPUS, campus });

// Thunks
export const getCampus = campusId => async dispatch => {
  const { data } = await axios.get(`/api/campuses/${campusId}`);
  dispatch(gotCampus(data));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case GOT_CAMPUS:
      return action.campus;
    default:
      return state;
  }
};

export default reducer;
