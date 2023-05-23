import { actions } from '../../redux/actions/actions'

export const getAllTickets = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_ALL_TICKETS') {
        let data = new FormData()
        data.set("limit", action.payload.limit);
        data.set("offset", action.payload.offset * action.payload.limit);
        fetch('https://tickchak.co.il/ajax/api/exercise_get_tickets', {
            method: 'POST',
            body: data,
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                dispatch(actions.setTickets(data.tickets));
                dispatch(actions.setLoader(false));
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return next(action);
}
