import {connect} from 'react-redux';
import {fetchJobs} from '../../actions/job_actions';
import Jobs from './jobs';


const mapSTP = (state) => {
    return {
        jobs: Object.values(state.jobs.all)
    }
}

const mapDTP = dispatch => {
    return {
        fetchJobs: () => dispatch(fetchJobs())
    }
}

export default connect(mapSTP, mapDTP)(Jobs);