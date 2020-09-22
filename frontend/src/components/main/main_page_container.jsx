import { connect } from 'react-redux';
import MainPage from './main_page';
import { withRouter } from 'react-router-dom'

const mSTP = state => ({
    session: state.session
});

const mDTP = dispatch => ({

})

export default withRouter(connect(mSTP, mDTP)(MainPage))