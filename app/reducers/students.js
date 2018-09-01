import axios from 'axios';

// Action Types
const GOT_STUDENTS = 'GOT_STUDENTS';

// Action Creators
const gotStudents = students => ({
  type: GOT_STUDENTS,
  students,
});

// Thunks
export const getStudents = () => async dispatch => {
  const { data } = await axios.get('/api/students');
  dispatch(gotStudents(data));
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case GOT_STUDENTS:
      return action.students;
    default:
      return state;
  }
};

export default reducer;
