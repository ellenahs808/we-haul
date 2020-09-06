import {connect} from 'react-redux';
import {fetchJobs, fetchJob, updateJob } from '../../actions/job_actions';
import Jobs from './jobs';
import { openModal } from '../../actions/modal_actions';
import {updateAddress, removeAddress} from '../../actions/address_actions'


const mapSTP = (state) => {
    return {
        jobs: Object.values(state.jobs.all),
        address: state.address,
        currentUser: state.session.user
    }
}

const mapDTP = dispatch => {
    return {
        fetchJobs: () => dispatch(fetchJobs()),
        openModal: type => dispatch(openModal(type)),
        fetchJob: jobId => dispatch(fetchJob(jobId)),
        updateAddress: (address) => dispatch(updateAddress(address)),
        removeAddress: () => dispatch(removeAddress()),
        updateJob: (jobData) => dispatch(updateJob(jobData))
    }
}

export default connect(mapSTP, mapDTP)(Jobs);