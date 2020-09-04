import { combineReducers } from 'redux';
import session from './session_reducer';
import address from './address_reducer'
import errors from './errors_reducer';
import jobs from './jobs_reducer';
import ui from './ui_reducer';

const RootReducer = combineReducers({
    session,
    address,
    errors,
    jobs,
    ui
});

export default RootReducer;