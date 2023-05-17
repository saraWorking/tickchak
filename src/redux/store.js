import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducers from './reducers/appReducers';
import appMiddleware from './middelwares/appMiddleware';
import { actions } from './actions/actions';

const store = createStore(
    appReducers, composeWithDevTools(
        applyMiddleware(
            ...appMiddleware
        ),
    )
)

window.store = store
export default store;