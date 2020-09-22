import {RECEIVE_JOBS, RECEIVE_JOB, RECEIVE_NEW_JOB, DELETE_JOB} from '../actions/job_actions';

const JobsReducer = (state ={all:{}, user: [], new: undefined}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_JOBS:
            newState.all = action.jobs.data;
            return newState;
        case RECEIVE_JOB:
            newState.user = action.job.data;
            return newState;
        case RECEIVE_NEW_JOB:
            newState.new = action.job.data;
            newState.user.push(action.job.data)
            return newState;
        case DELETE_JOB:
            delete newState[action.job.id];
            return newState;
        default:
            return state;
    }
}

export default JobsReducer;