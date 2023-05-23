
import { combineReducers } from 'redux';
import ticketReducer from './ticket.reducer'

// Combine with other reducers we may add in the future
const appReducers = combineReducers({
  ticket: ticketReducer
});

export default appReducers