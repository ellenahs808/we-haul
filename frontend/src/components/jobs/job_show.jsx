import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-modal'

const JobShow = (props) => {


        const [show, setShow] = useState(false);
    
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        return (
            <div>
              <button variant="primary" onClick={handleShow}>
                Launch demo modal
              </button>
        
              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                  <button variant="secondary" onClick={handleClose}>
                    Close
                  </button>
                  <button variant="primary" onClick={handleClose}>
                  Save Changes
                  </button>
                </Modal.Footer>
              </Modal>
            </div>
          )
        }


// import React from 'react';
// import { Link } from "react-router-dom";


// class JobShow extends React.Component {
//     constructor(props) {
//         super(props);
  
//     };


//     // handleClaim = () => {
//     //     setState({
//     //         status: state.status + 1,
//     //         hauler: this.props.currentUserId
//     //     })


//     render() {
//         const { job } = this.props;
//         console.log(job)
//         return (
//             <div>
//                 <div>
//                 </div>
//                     <Link onClick={() => this.props.openModal('jobRoute')}> 
//                         <h1>Job Details</h1>
//                     </Link>
//                 <div>
//                     <div>Requester name:</div>
//                         <span>{job.user.firstName} </span>
//                     <div>Phone number:</div>
//                         <span>{job.user.phoneNumber}</span>
//                     <div>Haul details:</div>
//                         <span>{job.details}</span>
//                     <div>Pick up address:</div>
//                         <span>{this.props.job.startAddress}</span>
//                     <div>Drop off address:</div>
//                         <span>{this.props.job.endAddress}</span>
//                     <div>Status:</div>
//                         <span>{this.props.job.status}</span> 
//                 </div>
//                 <div>
//                     {/* <button onClick={() => handleClaim()}>Job Complete</button>
//                     <button onClick={() => handleCancel()}>Cancel Job</button> */}
//                 </div>
//             </div>
//         )
//     }
// };


export default JobShow;