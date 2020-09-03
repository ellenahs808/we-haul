import { connect } from 'react-redux';

import { fetchJobs, deleteJob, fetchJob } from '../../actions/job_actions';
import JobShow from './job_show';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = state => {
    // console.log(jobId)
    let jobId = state.ui.modal.jobId;
    return {
        job: Object.values(state.jobs.all).filter(job => job.id === jobId)[0],
        currentUserId: state.session.user.id
    }
};

const mDTP = dispatch => ({
    fetchJobs: () => dispatch(fetchJobs()),
    deleteJob: jobId => dispatch(deleteJob(jobId)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchJob: jobId => dispatch(fetchJob(jobId))
});

export default connect(mSTP, mDTP)(JobShow);