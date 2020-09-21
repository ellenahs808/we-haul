import React from 'react';

import '../../styles/user_job.scss';
import JobForm from './job_form';
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import mapboxgl from "mapbox-gl";
import JobMapContainer from "./job_map_container";



class UserJob extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      map: null,
      lng: -122.44,
      lat: 37.76,
      zoom: 11,
      rating: 0,
      driver: ''
    };
    

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchJob(this.props.currentUser.id);
  }


  componentDidUpdate() {
    if (this.props.haulerRating.length === 0) {
      this.props.fetchUser(this.props.jobs[0].driver);
    }
  }


 update(field) {
   return(e) => this.setState({
     [field]: e.currentTarget.value
   })
 };


 handleSubmit(e) {
   e.preventDefault();
  //  this.props.updateUser(this.state)
  //   .then(this.props.fetchUser(this.props.jobs[0].driver)

  this.setState(() => ({
    rating: this.props.haulerRating[1], driver: this.props.jobs[0].driver
  }), () => this.props.updateUser(this.state))
 };


  
  
  statusUpdate() {
    if (this.props.jobs[0].status === 0) {
      return <div>Pending for driver...</div>;
    } else if (this.props.jobs[0].status === 1) {
      return <div>A driver has taken your request!</div>;
    } else {
      // this.props.fetchUser(this.props.jobs[0].driver)
      // if (this.props.haulerRating[1] > 0) {
        // debugger
        return (
          <div>
            <div>Your request has been completed!</div>
            <br/>
            <div>Please submit a rating</div>
              <form onSubmit={this.handleSubmit}>
                <label>1
                    <input 
                        type="radio"
                        value="1"
                        name="rating"
                        onChange={this.update("rating")}
                        // onClick={ this.handleRatingClick(1) }
                    />
                </label>
                <label>2
                    <input 
                        type="radio"
                        value="2"
                        name="rating"
                        onChange={this.update("rating")}
                        // onClick={ this.handleRatingClick(2) }
                    />
                </label>
                <label>3
                    <input 
                        type="radio"
                        value="3"
                        name="rating"
                        onChange={this.update("rating")}
                        // onClick={ this.handleRatingClick(3) }
                    />
                </label>
                <label>4
                    <input 
                        type="radio"
                        value="4"
                        name="rating"
                        onChange={this.update("rating")}
                        // onClick={ this.handleRatingClick(4) }
                    />
                </label>
                <label>5
                    <input 
                        type="radio"
                        value="5"
                        name="rating"
                        onChange={this.update("rating")}
                        // onClick={ this.handleRatingClick(5) }
                    />
                </label>
               <br/>
               <input 
                type="submit"
                value="Submit Rating"
                onSubmit={this.handleSubmit}
              />
               
              </form>
          </div>
        )
      
    }
  };

  


  render() {
  
    const ownJobs = this.props.jobs[0];

  

    if (!ownJobs) {
      return null;
    }
    

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
                  window.location.reload(false);
                  this.props.deleteJob(ownJobs._id);
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
};


export default UserJob;