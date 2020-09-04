import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import JobErrorsReducer from './job_error_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    job: JobErrorsReducer
});