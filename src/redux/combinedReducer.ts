import { combineReducers } from 'redux';
import reducer from './repoReducer';

const reducers = combineReducers({
  repoReducer: reducer,
});

export default reducers;
