import JobMap from './job_map'
import { connect } from 'react-redux';
import {updateAddress, removeAddress} from '../../actions/address_actions'


const mSTP = state => ({
  address: state.address
})

const mDTP = dispatch => ({
    removeAddress: () => dispatch(removeAddress()),
    updateAddress: (address) => dispatch(updateAddress(address))
})

export default connect(mSTP, mDTP)(JobMap);