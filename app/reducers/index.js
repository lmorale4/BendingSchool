// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux';
import campuses from './campuses';
import campus from './campus';
import students from './students';
import student from './student';

// const initialState = {}

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
  campuses,
  campus,
  students,
  student,
});

export default rootReducer;
