import React from 'react';
import {withRouter} from 'react-router-dom';
import JobRoutes from './job_route';

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
                {this.state.jobs.map(job => (
                    <JobRoutes key={job.id} details={job.details}/>
                ))}
            </div>
        )
    }
}

export default withRouter(Job);