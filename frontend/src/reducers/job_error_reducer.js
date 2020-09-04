import {
    RECEIVE_JOB_ERRORS,
} from '../actions/job_actions';

import {RECEIVE_NEW_JOB} from '../actions/job_actions';

const _nullErrors = [];

const JobErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_JOB_ERRORS:
            return action.errors;
        case RECEIVE_NEW_JOB:
            return _nullErrors;
        default:
            return state;
    }
};

export default JobErrorsReducer;