import axios from'axios';

export const fetchJobs = () => {
    return axios.get('api/jobs')
}

export const fetchJob = id => {
    return axios.get(`/api/jobs/${id}`)
}

export const createJob = job => {
    return axios.post('/api/tasks', job)
}

export const updateJob = job => {
    return axios.patch(`/api/tasks/${job._id}`, data)
}

export const deleteJob = jobId => {
    return axios.delete(`/api/tasks/${jobId}`)
}