import UserJobMap from './user_job_map'
import { connect } from 'react-redux';
import { updateAddress, removeAddress } from '../../actions/address_actions'


const mSTP = state => ({
    address: state.address,
    type: state.session.user.userType,
    requester: state.jobs.user
})

const mDTP = dispatch => ({
    removeAddress: () => dispatch(removeAddress()),
    updateAddress: (address) => dispatch(updateAddress(address))
})

export default connect(mSTP, mDTP)(UserJobMap);