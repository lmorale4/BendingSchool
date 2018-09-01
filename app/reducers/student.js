import axios from 'axios';

// Action Types
const GOT_STUDENT = 'GOT_STUDENT';

// Action Creators
const gotStudent = student => ({
  type: GOT_STUDENT,
  student,
});

// Thunks
export const getStudent = studentId => async dispatch => {
  const { data } = await axios.get(`/api/students/${studentId}`);
  dispatch(gotStudent(data));
};

// Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    case GOT_STUDENT:
      return action.student;
    default:
      return state;
  }
};

export default reducer;
