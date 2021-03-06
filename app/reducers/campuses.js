import axios from 'axios';

// Action Types
const GOT_CAMPUSES = 'GOT_CAMPUSES';
const GOT_CAMPUS = 'GOT_CAMPUS';

const ADD_CAMPUS = 'ADD_CAMPUS';

const FETCHING_CAMPUSES = 'FETCHING_CAMPUSES';
const ERROR = 'ERROR';

// Action Creators
const gotCampuses = campuses => ({
  type: GOT_CAMPUSES,
  campuses,
});

const gotCampus = campus => ({ type: GOT_CAMPUS, campus });

const addCampus = campus => ({ type: ADD_CAMPUS, campus });

const setFetchingTrue = () => ({
  type: FETCHING_CAMPUSES,
});

const setErrorTrue = () => ({
  type: FETCHING_CAMPUSES,
});

// Thunks
export const getCampuses = () => {
  return async dispatch => {
    try {
      dispatch(setFetchingTrue());
      const { data } = await axios.get('/api/campuses');
      dispatch(gotCampuses(data));
    } catch (err) {
      dispatch(setErrorTrue());
    }
  };
};

export const getCampus = campusId => async dispatch => {
  try {
    dispatch(setFetchingTrue());
    const { data } = await axios.get(`/api/campuses/${campusId}`);
    dispatch(gotCampus(data));
  } catch (err) {
    dispatch(setErrorTrue());
  }
};

export const postCampus = campus => async dispatch => {
  try {
    const { data } = await axios.post('/api/campuses', campus);
    dispatch(addCampus(data));
  } catch (err) {
    dispatch(setErrorTrue());
  }
};

// Initial State
const initialState = {
  all: [],
  selected: {},
  isFetching: false,
  isError: false,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CAMPUSES: {
      // return {
      //   ...state,
      //   all: action.campuses,
      //   isFetching: false,
      //   isError: false,
      // };
      const newState = { ...state };
      newState.all = action.campuses;
      newState.isFetching = false;
      newState.isError = false;
      return newState;
    }
    case GOT_CAMPUS:
      return {
        ...state,
        selected: action.campus,
        isFetching: false,
        isError: false,
      };
    case ADD_CAMPUS:
      return {
        ...state,
        all: [...state.all, action.campus],
      };
    case FETCHING_CAMPUSES:
      return {
        ...state,
        isFetching: true,
      };
    case ERROR:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export default reducer;
