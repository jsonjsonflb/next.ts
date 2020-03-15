import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import homeReducer from './homeReducer';

export default combineReducers({
  counter: counterReducer,
  home: homeReducer
});
