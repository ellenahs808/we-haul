import axios from 'axios';


export const getJobs = () => {
    return axios.get('/api/jobs')
}

export const getJob = (jobId) => {
    return axios.get(`/api/jobs/${jobId}`)
}
export const createJob = (jobData) => {
    return axios.post('/api/jobs/', jobData)
}

export const updateJob = (jobData) => {
    return axios.patch(`/api/jobs/${jobData._id}`, jobData)
}

export const deleteJob = (jobId) => {
    return axios.delete(`/api/jobs/${jobId}`)
}