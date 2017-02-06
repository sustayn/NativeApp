import { combineReducers } from 'redux';
// import { NavigationReducer } from '@exponent/ex-navigation';

import Navigator from '../Navigator';
import { reducer as counterReducer } from './counter';
import { reducer as deviceReducer } from './device';

// export const navigationStateKey = 'navigation';

export default combineReducers({
  counter: counterReducer,
  device:  deviceReducer,
  /* third party reducers */
  nav: (state, action) => Navigator.router.getStateForAction(action, state),
});