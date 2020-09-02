import React from 'react';


class JobShow extends React.Component {
    constructor(props) {
        super(props);
  
    };


    // handleClaim = () => {
    //     setState({
    //         status: state.status + 1,
    //         hauler: this.props.currentUserId
    //     })


    render() {
        const { job } = this.props;

        return (
            <div>
                <div>
                    <h1>Job Details</h1>
                </div>
                <div>
                    <div>Requester name:</div>
                        <span>{job.requester.firstName} </span>
                    <div>Phone number:</div>
                        <span>{job.requester.phoneNumber}</span>
                    <div>Haul details:</div>
                        <span>{job.details}</span>
                    <div>Pick up address:</div>
                        <span>{job.startAddress}</span>
                    <div>Drop off address:</div>
                        <span>{job.endAddress}</span>
                    <div>Status:</div>
                        <span>{job.status}</span>
                </div>
                <div>
                    {/* <button onClick={() => handleClaim()}>Job Complete</button>
                    <button onClick={() => handleCancel()}>Cancel Job</button> */}
                </div>
            </div>
        )
    }
};


export default JobShow;