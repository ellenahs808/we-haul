import React from 'react';

class UserJob extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            jobs: []
        }
    }

    componentDidMount(){
        this.props.fetchJob(this.props.currentUser.id);

    }

    // componentDidUpdate(newState){
    //     this.setState({jobs: newState.job})
    // }

    render() {
        // const ownJobs = this.props.jobs[this.props.jobs.length - 1];
        return(
            <div>
                 {this.props.jobs.map(job => (
                     <div key={job._id}>
                         <div>{job.details}</div>
                         <div>{job.startAddress}</div>
                         <div>{job.endAddress}</div>
                         <button onClick={() => {window.location.reload(false); this.props.deleteJob(job._id)}}>Delete</button>
                     </div>
                  ))} 
            </div>
        )
    }
}


export default UserJob;