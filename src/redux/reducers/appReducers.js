
import { combineReducers } from 'redux';
import ticketsReducer from './tickets.reducer'

// Combine with other reducers we may add in the future
const appReducers = combineReducers({
  tickets: ticketsReducer
});

export default appReducers