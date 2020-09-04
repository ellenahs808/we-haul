
import * as JobAPIUTIL from '../util/jobs_api_util'

export const RECEIVE_JOBS = 'RECEIVE_JOBS';
export const RECEIVE_JOB = 'RECEIVE_JOB';
export const RECEIVE_NEW_JOB = 'RECEIVE_NEW_JOB';
export const DELETE_JOB = 'DELETE_JOB';
export const RECEIVE_JOB_ERRORS = "RECEIVE_JOB_ERRORS";

export const receiveJobs = jobs => (
    {
        type: RECEIVE_JOBS,
        jobs
    }
)

export const receiveJob = job => (
    {
        type: RECEIVE_JOB,
        job
    }
)

export const receiveNewJob = job => (
    {
        type: RECEIVE_NEW_JOB,
        job
    }
)

export const removeJob = job => (
    {
        type: DELETE_JOB,
        job
    }
)

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_JOB_ERRORS,
    errors,
  };
};

export const fetchJobs = () => dispatch => (
    JobAPIUTIL.getJobs() 
        .then(jobs => dispatch(receiveJobs(jobs)))
        .catch(err => console.log(err))
)

export const fetchJob = (id) => dispatch => (
    JobAPIUTIL.getJob(id)
        .then(job => dispatch(receiveJob(job)))
        .catch(err => console.log(err))
)

export const createJob = (jobData) => dispatch => {
    // debugger
 return   JobAPIUTIL.createJob(jobData)
        .then(job => dispatch(receiveNewJob(job)))
        .catch(err => console.log(err))
}

export const updateJob = (jobData) => dispatch => (
    JobAPIUTIL.updateJob(jobData)
        .then(job => dispatch(receiveJob(job)))
        .catch(err => console.log(err))
)

export const deleteJob = (jobId) => dispatch => (
    JobAPIUTIL.deleteJob(jobId)
        .then(job => dispatch(removeJob(job)))
)

