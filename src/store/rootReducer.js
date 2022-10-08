import { combineReducers } from 'redux';
import gistsReducer from './reducers/gists.reducer';

const rootReducer = combineReducers({
  gists: gistsReducer,
})

export default rootReducer;