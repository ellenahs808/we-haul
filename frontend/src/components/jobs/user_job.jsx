import React from 'react';
import '../../styles/jobs.scss';

class UserJob extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            jobs: []
        }
        // this.deleteExtraJobs = this.deleteExtraJobs.bind(this);
    }

    componentDidMount(){
        this.props.fetchJob(this.props.currentUser.id);

    }

    statusUpdate() {
        if (this.props.jobs[0].status === 0) {
            return (
                <div>Pending for driver...</div>
            ) 
        } else if (this.props.jobs[0].status === 1) {
            return(
                <div>A driver has taken your request!</div>
            )
        } else {
            return(
            <div>Your request has been completed!</div>
            )
        }
    }
    


    render() {
        // this.deleteExtraJobs()
        const ownJobs = this.props.jobs[0];
        

        if (this.props.jobs.length > 1) {
            this.props.deleteJob(this.props.jobs[0]._id);
            window.location.reload(false);
        }

        // if (this.props.jobs.length < 1) {
        //     return(
        //         <JobForm/>
        //     )
        // }

        if (!ownJobs) {
            return null;
        }
        return(
            <div className='user-job-div'>
                <div className='user-job-container'>
                        <div className='user-request-container'>
                            <div className='request-details'>Request details:</div>
                            <div classname='job-details'>{ownJobs.details}</div>
                            <div className='pickup-address'>Pickup address:</div>
                            <div classname='job-details'>{ownJobs.startAddress}</div>
                            <div className='dropoff-address'>Drop off address:</div>
                            <div classname='job-details'>{ownJobs.endAddress}</div>
                            {/* {this.statusUpdate()} */}
                            <br />
                            <button className='delete-btn' onClick={() => { window.location.reload(false); this.props.deleteJob(ownJobs._id) }}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
};


export default UserJob;