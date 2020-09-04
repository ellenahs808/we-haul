
import React, { useState } from "react";
import {withRouter} from 'react-router-dom';
import JobShow from './job_show';
import { Link } from "react-router-dom";
import JobRoute from './job_route';
import ReactDom from 'react-dom';
import JobMapContainer from './job_map_container'
import '../../styles/jobs.scss'


class Job extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props.jobs)
    }

    componentDidMount(){
        this.props.fetchJobs();
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.address.startAddress !== this.props.address.startAddress && prevProps.address.endAddress !== this.props.address.endAdress ) {
    //         this.props.fetchJobs();
    //     }
    // }

    render() {
        return (
            <div id="job_index_container">
                <div id="job_show_sub_left">
                    <h2>All Jobs</h2>
                
                {this.props.jobs.map(job => (
                  
                        <JobShow
                        key={job.id} 
                        job={job}
                        updateAddress={this.props.updateAddress}
                        removeAddress={this.props.removeAddress}
                        fetchJobs={this.props.fetchJobs}
                        />
                        ))}
                </div>
                <div id="job_show_sub_right">
                        <JobMapContainer 
                        />
                </div>
            </div>
        )
    }
}

export default withRouter(Job);

  // componentWillReceiveProps(newState) {
    //     this.setState({jobs: newState.jobs})
    // }

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