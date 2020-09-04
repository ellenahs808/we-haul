import {connect} from 'react-redux';
import {createJob} from '../../actions/job_actions';
import JobForm from './job_form'
import {withRouter} from 'react-router-dom'

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

export default withRouter(connect(mapSTP, mapDTP)(JobForm));