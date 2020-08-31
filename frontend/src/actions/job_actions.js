import * as APIUtil from '../util/job_api_util'

export const RECEIVE_JOBS = 'RECEIVE_JOBS';
export const RECEIVE_JOB = 'RECEIVE_JOB';
export const REMOVE_JOB = 'REMOVE_JOB';
export const RECEIVE_JOB_ERRORS = 'RECEIVE_JOB_ERRORS'

export const receiveJobs = jobs => {
    return {
        type: RECEIVE_JOBS,
        jobs
    }
};

export const receiveJob = job => {
    return {
        type: RECEIVE_JOB,
        job
    }
};

export const removeJob = jobId => {
    return {
        type: REMOVE_JOB,
        jobId
    }
};

export const receiveErrors = errors => {
    return { 
        type: RECEIVE_JOB_ERRORS,
        errors
    }
};

export const fetchJobs = () => dispatch => {
    return APIUtil.fetchJobs()
        .then(jobs => dispatch(receiveJobs(jobs)))
        .catch(err => console.log(err))
};

export const fetchJob = id => {
    return APIUtil.fetchJob(id)
        .then(job => dispatch(receiveJob(job)))
        .catch(err => console.log(err))
};

export const createJob = job => {
    return APIUtil.createJob(job)
        .then(job => dispatch(receiveJob(job)))
        .catch(err => console.log(err))
};

export const updateJob = job => {
    return APIUtil.updateJob(job)
        .then(job => dispatch(receiveJob(job)))
        .catch(err => console.log(err))
}

export const deleteJob = jobId => {
    return APIUtil.deleteJob
        .then(() => removeJob)
}