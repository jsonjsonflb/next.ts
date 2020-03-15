import { types } from '@/utils';
import { GET_HOME_LIST } from '../actions/homeActions';

const initValue = {
  list: []
};

const counterReducer = (state = initValue, action: types.ActionType) => {
  switch (action.type) {
    case GET_HOME_LIST:
      return { ...state, list: action.payload.list };

    default:
      return { ...state };
  }
};

export default counterReducer;
