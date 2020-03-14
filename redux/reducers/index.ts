import { combineReducers } from 'redux';
import counterActions from './counterActions';

export default combineReducers({
  counter: counterActions
});
