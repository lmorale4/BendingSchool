import axios from 'axios';

// Action Types
const SET_STUDENTS = 'SET_STUDENTS';
const SET_STUDENT = 'SET_STUDENT';
const FETCHING_STUDENTS = 'FETCHING_STUDENTS';
const ERROR_STUDENTS = 'ERROR_STUDENTS';

// Action Creators
const setStudents = students => ({
  type: SET_STUDENTS,
  students,
});

const setStudent = student => ({
  type: SET_STUDENT,
  student,
});

const setFetchingTrue = () => ({
  type: FETCHING_STUDENTS,
});

const setErrorTrue = () => ({
  type: ERROR_STUDENTS,
});

// Thunks
export const getStudents = () => async dispatch => {
  dispatch(setFetchingTrue(true));
  const { data } = await axios.get('/api/students');
  dispatch(setStudents(data));
};

export const getStudent = studentId => async dispatch => {
  try {
    dispatch(setFetchingTrue(true));
    const { data } = await axios.get(`/api/students/${studentId}`);
    dispatch(setStudent(data));
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
    case SET_STUDENTS:
      return {
        ...state,
        all: action.students,
        isFetching: false,
        isError: false,
      };
    case SET_STUDENT:
      return {
        ...state,
        selected: action.student,
        isFetching: false,
        isError: false,
      };
    case FETCHING_STUDENTS:
      return {
        ...state,
        isFetching: true,
      };
    case ERROR_STUDENTS:
      return {
        ...state,
        isError: true,
      };
    default:
      return state;
  }
};

export default reducer;
