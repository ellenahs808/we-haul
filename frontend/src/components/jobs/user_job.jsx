import React from 'react';
import keys from '../../config/keys_mapbox'

import '../../styles/user_job.scss';
// import JobForm from './job_form';
// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
// import mapboxgl from "mapbox-gl";
import JobFormContainer from './job_form_container'
import JobMapContainer from "./job_map_container";



class UserJob extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   jobs: [],
    //   map: null,
    //   lng: -122.44,
    //   lat: 37.76,
    //   zoom: 11,
    // };
  
  }

  callScript = () => {
    const script = document.createElement("script");
    script.className = "autocomplete";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${keys.googleMapsKey}&libraries=places`;
    script.async = true;
    document.body.appendChild(script);
    // console.log(props.userType)
  };

  componentDidMount() {
    this.props.fetchJob(this.props.currentUser.id)
    this.callScript()
  }


  // componentDidUpdate() {
  //   if (this.props.jobs.length > 0) {
  //     this.props.fetchJob(this.props.currentUser.id);
  //   }
  // }
  

  statusUpdate() {
    if (this.props.jobs[0].status === 0) {
      return <div>Waiting for hauler...</div>;
    } else if (this.props.jobs[0].status === 1) {
      return <div>A hauler has taken your request!</div>;
    } else {
      return <div>Your request has been completed!</div>;
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
        <div className="user-job-container">
          <div className="user-request-container">
            <p className="request-details">Request details:</p>
            <div classname="job-details">{ownJobs.details}</div>
            <p className="pickup-address">Pickup address:</p>
            <div classname="job-details">{ownJobs.startAddress}</div>
            <p className="dropoff-address">Drop off address:</p>
            <div classname="job-details">{ownJobs.endAddress}</div>
            <p className="status-details">Status:</p>
            <div>{this.statusUpdate()}</div>
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
              <JobMapContainer />
            </div>
          </div>
        </div>
      </div>
    );
    }
  }
};


export default UserJob;