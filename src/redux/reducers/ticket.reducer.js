import produce from 'immer';
import createReducer from "./reducerUtil";

const initialState = {
    tickets: [],
    newTicketIsOpen: false,
    loader: true
}


const ticketReducer = {
    setTickets(state, action) {
        state.tickets = state.tickets.concat(action.payload);
    },
    saveNewTicket(state, action) {
        state.tickets.push(action.payload);
    },
    closeNewTicketModal(state, action) {
        state.newTicketIsOpen = false;
    },
    openNewTicketModal(state, action) {
        state.newTicketIsOpen = true;
    },
    setLoader(state, action) {
        state.loader = action.payload;
    },
    changeIsActive(state, action) {
        const i = state.tickets.findIndex(x => x.title == action.payload)
        state.tickets[i].active = !state.tickets[i].active
    }

}



export default produce((state, action) => createReducer(state, action, ticketReducer), initialState);