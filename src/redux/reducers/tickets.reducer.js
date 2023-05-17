import produce from 'immer';
import createReducer from "./reducerUtil";

const initialState = { tickets: [] }


const ticketsReducer = {
    setTickets(state, action) {
        state.tickets= state.tickets.concat(action.payload);
    }

}



export default produce((state, action) => createReducer(state, action, ticketsReducer), initialState);