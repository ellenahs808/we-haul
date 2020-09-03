import {connect} from 'react-redux';
import {fetchJobs, fetchJob } from '../../actions/job_actions';
import Jobs from './jobs';
import { openModal } from '../../actions/modal_actions';
import {updateAddress, removeAddress} from '../../actions/address_actions'


const mapSTP = (state) => {
    return {
        jobs: Object.values(state.jobs.all)
    }
}

const mapDTP = dispatch => {
    return {
        fetchJobs: () => dispatch(fetchJobs()),
        openModal: type => dispatch(openModal(type)),
        fetchJob: jobId => dispatch(fetchJob(jobId)),
        updateAddress: (address) => dispatch(updateAddress(address)),
        removeAddress: () => dispatch(removeAddress())
    }
}

export default connect(mapSTP, mapDTP)(Jobs);