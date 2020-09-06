import {connect} from 'react-redux';
import {createJob, fetchJob} from '../../actions/job_actions';
import JobForm from './job_form'
import {withRouter} from 'react-router-dom'

const mapSTP = (state) => ({
    currentUser: state.session.user,
    job: {
        details: '',
        type: '',  
        startAddress: '',
        status: 0,
        driver: '',
        endAddress: '',
        errors: {},
        user: ''
    },
    errors: state.errors.job
})

const mapDTP = dispatch => ({
    createJob: jobData => dispatch(createJob(jobData)),
    fetchJob: id => dispatch(fetchJob(id))
})

export default withRouter(connect(mapSTP, mapDTP)(JobForm));