import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { axios } from '@/utils';
import rootReducer from './reducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk.withExtraArgument(axios))
  // other store enhancers if any
);
// const store = createStore(rootReducer, enhancer);

export default function initializeStore(state = {}) {
  const store = createStore(rootReducer, Object.assign({}, state), enhancer);
  return store;
}
