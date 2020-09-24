// import { receiveCurrentUser } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { fetchJob, deleteJob, fetchJobs } from '../../actions/job_actions';
import { updateUser, fetchUser } from '../../actions/session_actions';
import UserJob from './user_job';
import {withRouter} from 'react-router-dom'



const mapSTP = (state) => {

    return {
        jobs: Object.values(state.jobs.user),
        currentUser: state.session.user,
        status: state.jobs.user,
        haulerRating: state.haulerRating,
    }
};


const mapDTP = dispatch => ({
    fetchJob: id => dispatch(fetchJob(id)),
    deleteJob: jobId => dispatch(deleteJob(jobId)),
    fetchJobs: () => dispatch(fetchJobs()),
    updateUser: user => dispatch(updateUser(user)),
    fetchUser: userId => dispatch(fetchUser(userId))
})


export default withRouter(connect(mapSTP, mapDTP)(UserJob));