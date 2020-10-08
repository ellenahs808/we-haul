
import React from "react";
import {withRouter} from 'react-router-dom';
import JobShow from './job_show';
// import { Link } from "react-router-dom";
// import JobRoute from './job_route';
// import ReactDom from 'react-dom';
import JobMapContainer from './job_map_container'
import '../../styles/jobs.scss'
import Contacts from '../main/contacts'


class Job extends React.Component {
    // constructor(props){
    //     super(props);
    //     // console.log(this.props.jobs)
    // }

    componentDidMount(){
        this.props.fetchJobs();
    }

    componentDidUpdate() {
        this.props.fetchJobs();
    }
    render() {
        let checkFilter = this.props.jobs.filter(job => ((job.driver === this.props.currentUser.id) && (job.status !== 2)))
        // console.log(checkFilter)
        let filtered = this.props.jobs.filter(job => (job.status !== 2))
        // console.log(filtered)
        
        if (checkFilter.length !== 0) {
            filtered = checkFilter
        }
        
      
        return (
            
                <div>
                    <div id="job_index_container">
                        <div id="job_show_sub_left">
                            <div className='alljobs-header'>All Jobs</div>
                        
                        {
                        
                        filtered.map(job => (
                            
                                <JobShow
                                job={job}
                                currentUser={this.props.currentUser}
                                updateAddress={this.props.updateAddress}
                                removeAddress={this.props.removeAddress}
                                fetchJobs={this.props.fetchJobs}
                                updateJob={this.props.updateJob}
                                fetchJob={this.props.fetchJob}
                                key={job._id} 
                                />
                                ))}
                        </div>
                        <div id="job_show_sub_right">    
                                    <JobMapContainer 
                                    />
                                    
                        </div>
                    </div>
                    <div className="job-page-contacts"><Contacts /></div>
                </div>
                
              
           
        )
    }
}

export default withRouter(Job);

 