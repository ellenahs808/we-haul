import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal} from '../../actions/modal_actions';
import {fetchUser } from '../../actions/session_actions'
import {fetchJob} from '../../actions/job_actions';
import NavBar from './navbar';



const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated,
    session: state.session,
    currentUser: state.session.user,
});


const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: type => dispatch(openModal(type)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchJob: id => dispatch(fetchJob(id)),
    closeModal: () => dispatch(closeModal())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);