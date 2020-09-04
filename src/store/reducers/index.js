import { tasksReducer } from './tasksReducer';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  tasks: tasksReducer
});
