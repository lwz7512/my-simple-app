import { applyMiddleware, combineReducers, createStore } from 'redux';

// actions.js, called by ui
export const activateGeod = geod => ({
  type: 'ACTIVATE_GEOD',
  geod,
});

export const closeGeod = () => ({
  type: 'CLOSE_GEOD',
});

// reducers.js, produce new state based on action
export const _geodR = (state = {init: 'blank'}, action) => {
  console.log(action);
  console.log(state);

  switch (action.type) {
    case 'ACTIVATE_GEOD':
      return action.geod;
    case 'CLOSE_GEOD':
      return {};
    default:
    // initially return default value
      return state;
  }
};

// state producer & exposer
export const reducers = combineReducers({
  // original: not easy to understand for beginner
  // geod,
  
  // redefined: expose geodR property for state using _geodR
  geodR: _geodR,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
}

export const store = configureStore();
