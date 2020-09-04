import {connect} from 'react-redux';
import {createJob} from '../../actions/job_actions';
import JobForm from './job_form'

const mapSTP = (state) => ({
    currentUser: state.session.user,
    job: {
        details: '',
        type: '',
        startAddress: '',
        endAddress: '',
        errors: {}
    },
    errors: state.errors.job
})

const mapDTP = dispatch => ({
    createJob: jobData => dispatch(createJob(jobData))
})

export default connect(mapSTP, mapDTP)(JobForm);