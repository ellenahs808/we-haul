import { receiveCurrentUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { fetchJob, deleteJob, fetchJobs} from '../../actions/job_actions';
import UserJob from './user_job';
import { withRouter } from 'react-router-dom';


const mapSTP = (state) => {
    // const userId = ownProps.match.params.userId;

    return {
        // job: Object.values(state.jobs.user).filter(job => job.user === state.session.user.id)[0],
        jobs: Object.values(state.jobs.user),
        currentUser: state.session.user,
    }
};


const mapDTP = dispatch => ({
    fetchJob: id => dispatch(fetchJob(id)),
    deleteJob: jobId => dispatch(deleteJob(jobId)),
    fetchJobs: () => dispatch(fetchJobs())
})


export default connect(mapSTP, mapDTP)(UserJob);