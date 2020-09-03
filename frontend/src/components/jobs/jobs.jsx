import React from 'react';
import {withRouter} from 'react-router-dom';
import JobShow from './job_show';
import { Link } from "react-router-dom";
import JobRoute from './job_route';



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
                    <JobRoute 
                    key={job.id} 
                    details={job.details}
                    openModal={this.props.openModal}
                    // startAddress={job.startAddress}
                    // endAddress={job.endAddress}
                    /></Link>
                    
                    ))}
  
            </div>
        )
    }
}

export default withRouter(Job);