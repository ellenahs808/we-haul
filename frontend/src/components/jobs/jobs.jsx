import React, { useState } from "react";
import {withRouter} from 'react-router-dom';
import JobShow from './job_show';
import { Link } from "react-router-dom";
import JobRoute from './job_route';
import Modal from "react-modal";
import JobsReducer from "../../reducers/jobs_reducer";
import ReactDom from 'react-dom'



// const Jobs = (props) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <div>
//       <button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </button>

//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <button variant="secondary" onClick={handleClose}>
//             Close
//           </button>
//           <button variant="primary" onClick={handleClose}>
//             Save Changes
//           </button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Jobs;















class Job extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            jobs: []
        }
    }

    componentWillMount(){
        this.props.fetchJobs();
    }

    componentWillReceiveProps(newState) {
        this.setState({jobs: newState.jobs})
    }
    render() {
      
        return (
            <div>
                <h2>All Jobs</h2>
                {/* {console.log(this.state.jobs)} */}
                {this.state.jobs.map(job => (
                    <Link onClick={() => this.props.openModal('jobShow')}> 
                    <JobShow 
                    key={job.id} 
                    job={job}
                    details={job.details}
                    openModal={this.props.openModal}
                    fetchJob={this.props.fetchJob}
                    fetchJobs={this.props.fetchJobs}
                    // startAddress={job.startAddress}
                    // endAddress={job.endAddress}
                    />
                    </Link>
                    ))}
  
            </div>
        )
    }
}

export default withRouter(Job);