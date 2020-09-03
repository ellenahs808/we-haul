import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-modal'



// class JobShow extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = this.props.job
//     this.handleModal = this.handleModal.bind(this);
//     // console.log(this.state);
//   }

  // handleClaim = () => {
  //     setState({
  //         status: state.status + 1,
  //         hauler: this.props.currentUserId
  //     })

  // componentDidMount() {
  //   this.props.fetchJobs();
  // }


  // handleModal() {
  //   this.props
  //     .fetchJob(this.props.key)
  //     .then(() => this.props.openModal("jobShow"));
  // }

  // render() {
    // const { job } = this.props;
    // const details = this.props.details
    
const JobShow = (props) => {
    return (

      <div>
       <Link onClick={console.log(props.job.details)}>Click me</Link>

        <div>{props.job.startAddress}</div>
        <div>{props.job.endAddress}</div>
        <div>{props.job.description}</div>
       

      </div>
      // <div>
      //   <div></div>
      //   <Link onClick={console.log(this.state.details)}>
      //     <h1>Job Details</h1>
      //   </Link> 
      //   <p>Job Details</p>
      //   <div className="job-listings">
      //     <div>Requester name:</div>
      //     {/* <span>{job.user.firstName} </span>
      //               <div>Phone number:</div>
      //                   <span>{job.user.phoneNumber}</span> */}
      //     <div>Haul details:</div>
      //       <span>{this.props.details}</span>
      //     <div>Pick up address:</div>
      //       <span>{this.props.startAddress}</span>
      //     <div>Drop off address:</div>
      //       <span>{this.props.endAddress}</span>
      //     <div>Status:</div>
      //     {/* <span>{this.props.job.status}</span>  */}
      //   </div>
      //   <div>
      //     {/* <button onClick={() => handleClaim()}>Job Complete</button>
      //               <button onClick={() => handleCancel()}>Cancel Job</button> */}
      //   </div>
      // </div>
    );
  }
//   }
// };


export default JobShow;