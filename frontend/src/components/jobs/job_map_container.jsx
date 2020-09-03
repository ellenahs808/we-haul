import JobMap from './job_map'
import { connect } from 'react-redux';


const mSTP = state => ({
    endAddress: '',
    startAddress: '',
})

const mDTP = dispatch => {

}

export default connect(mSTP, mDTP)(JobMap);