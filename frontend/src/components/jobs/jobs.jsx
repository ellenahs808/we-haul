
import React from "react";
import {withRouter} from 'react-router-dom';
import JobShow from './job_show';
// import { Link } from "react-router-dom";
// import JobRoute from './job_route';
// import ReactDom from 'react-dom';
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

    componentDidUpdate() {
        this.props.fetchJobs();
    }
    render() {
        const filtered = this.props.jobs.filter(job => (job.status !== 2))
        return (
            <div id="job_index_container">
                <div id="job_show_sub_left">
                    <div className='alljobs-header'>All Jobs</div>
                
                {
                
                filtered.map(job => (
                  
                        <JobShow
                        key={job.id} 
                        job={job}
                        currentUser={this.props.currentUser}
                        updateAddress={this.props.updateAddress}
                        removeAddress={this.props.removeAddress}
                        fetchJobs={this.props.fetchJobs}
                        updateJob={this.props.updateJob}
                        fetchJob={this.props.fetchJob}
                        />
                        ))}
                </div>
                <div id="job_show_sub_right">
                    <div id="divider_div">
                        <JobMapContainer 
                        />

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Job);

 