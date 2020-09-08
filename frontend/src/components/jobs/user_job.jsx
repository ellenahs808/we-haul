import React from 'react';
import keys from '../../config/keys_mapbox'
import '../../styles/user_job.scss';
import JobFormContainer from './job_form_container'
import UserJobMapContainer from "./user_job_map_container";

class UserJob extends React.Component {
  constructor(props) {
    super(props);
  }

  callScript = () => {
    const script = document.createElement("script");
    script.className = "autocomplete";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${keys.googleMapsKey}&libraries=places`;
    script.async = true;
    document.body.appendChild(script);
  };

  componentDidMount() {
    this.callScript()
    this.props.fetchJob(this.props.currentUser.id)
  }

  componentDidUpdate() {
    this.props.fetchJob(this.props.currentUser.id)
    
  }

  statusUpdate() {
    if (this.props.jobs[0].status === 0) {
      return <p className="job-item-details">Waiting for hauler...</p>;
    } else if (this.props.jobs[0].status === 1) {
      return <p className="job-item-details">A hauler has taken your request!</p>;
    } else {
      return <p className="job-item-details">Your request has been completed!</p>;
    }
  }


  render() {
    const ownJobs = this.props.jobs[0];
    if (!ownJobs) {
      return (
        <div className="user_job_form">
          <JobFormContainer />
        </div>
      )
    } else { 
    
    return (
      <div className="user-job-div">
        <div className="user_request_wrapper">


          <div className="user-request-container">
            <p className="request-details">Request details:</p>
            <p className="job-item-details">{ownJobs.details}</p>
            <p className="request-details">Pickup address:</p>
            <p className="job-item-details">{ownJobs.startAddress}</p>
            <p className="request-details">Drop off address:</p>
            <p className="job-item-details">{ownJobs.endAddress}</p>
            <p className="request-details">Status:</p>
            <p className="job-item-details">{this.statusUpdate()}</p>
            <br />
            <div className="delete-div">
              <button
                className="delete-btn"
                onClick={() => {
                  this.props.deleteJob(ownJobs._id);
                  window.location.reload();
                }}
              >
                Delete
              </button>
            </div>
            </div>
          <div className="user-map-container">
            <div className="map-div">
              <UserJobMapContainer />
          </div>
          </div>
        </div>
      </div>
    );
    }
  }
};


export default UserJob;