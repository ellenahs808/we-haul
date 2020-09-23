import React from 'react';
import keys from '../../config/keys_mapbox'
import '../../styles/user_job.scss';

// import JobForm from './job_form';
// import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
// import mapboxgl from "mapbox-gl";
import JobMapContainer from "./job_map_container";



import JobFormContainer from './job_form_container'
import UserJobMapContainer from "./user_job_map_container";


class UserJob extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   jobs: [],
    //   map: null,
    //   lng: -122.44,
    //   lat: 37.76,
    //   zoom: 11,
    //   rating: 0,
    //   id: ''
    // };

    this.driverId = this.props.haulerRating.id;
    this.driverRating = this.props.haulerRating.rating;
    this.ratingCount = this.props.haulerRating.numberofRatings;
    this.state = {
      rating: 0,
      id: ''
    }


    this.handleSubmit = this.handleSubmit.bind(this);

  }


  componentDidMount() {
    this.props.fetchJob(this.props.currentUser.id)
  }



  componentDidUpdate() {
    if (Object.keys(this.props.haulerRating).length === 0 && this.props.jobs.length > 0) {
      this.props.fetchUser(this.props.jobs[0].driver);
    }
  }


  // componentWillUpdate() {
  //   if (!this.props.jobs[0]) return null;
  //   this.props.fetchJob(this.props.jobs[0].driver)
  // }
  

 update(field) {
   return(e) => this.setState({
     [field]: parseInt(e.currentTarget.value), id: this.props.jobs[0].driver
    })

  //  debugger

 };


 handleSubmit(e) {
  e.preventDefault();

  let newRating = this.props.haulerRating.rating + this.state.rating;
  let newRatingCount = this.props.haulerRating.numberOfRatings + 1; 
  let driverId = this.props.haulerRating.id;
 
  console.log(newRating);
  console.log(newRatingCount);
  console.log(driverId);


  let updatedUser = {_id: driverId, rating: newRating, numberOfRatings: newRatingCount };
  console.log(updatedUser)
  this.props.updateUser(updatedUser);
  this.props.deleteJob(this.props.jobs[0]._id);
  window.location.reload();
  
  // this.props.updateUser(this.state)
  // debugger

  // this.setState(() => ({
  //   rating: 2000, id: this.props.jobs[0].driver
  // }), () => this.props.updateUser(this.state))


  // this.props.history.push('/')
  
  // console.log(this.props.updateUser(this.props.jobs[0].driver));
 };


  
  
  statusUpdate() {
    let firstName = this.props.haulerRating.firstName
    let lastName = this.props.haulerRating.lastName
    if (this.props.jobs[0].status === 0) {
      return <p className="job-item-details">Waiting for hauler...</p>;
    } else if (this.props.jobs[0].status === 1) {
      console.log(this.props.haulerRating.firstName)
      return (
        <p className="job-item-details">
          {firstName} {lastName} has taken your request!
        <br/>
        <i class="fas fa-phone-alt"> {this.props.haulerRating.phoneNumber}</i>
        </p>
      );
    } else {

        // debugger
        return (
          <div>
            <div>Your request has been completed!</div>
            <br />
          <div>Please submit a rating:</div>
            {/* <form> */}
            <label>
              1
              <input
                type="radio"
                value="1"
                name="rating"
                checked={(this.state.rating === 1)}
                onChange={this.update("rating")}
                // onClick={ this.handleSubmit }
              />
            </label>
            <label>
              2
              <input
                type="radio"
                value="2"
                name="rating"
                checked={(this.state.rating === 2)}
                onChange={this.update("rating")}
                // onClick={ this.handleSubmit }
              />
            </label>
            <label>
              3
              <input
                type="radio"
                value="3"
                name="rating"
                onChange={this.update("rating")}
                checked={(this.state.rating === 3)}
                // onClick={ this.handleSubmit }
              />
            </label>
            <label>
              4
              <input
                type="radio"
                value="4"
                name="rating"
                onChange={this.update("rating")}
                checked={(this.state.rating === 4)}
                // onClick={ this.handleSubmit }
              />
            </label>
            <label>
              5
              <input
                type="radio"
                value="5"
                name="rating"
                checked={(this.state.rating === 5)}
                onChange={this.update("rating")}
                // onClick={ this.handleSubmit }
              />
            </label>
            <br />
            <input
              type="submit"
              value="Submit Rating"
              onClick={(e) => this.handleSubmit(e)}
            />

            {/* </form> */}
          </div>
        );

    }
  };

  


  render() {
    const ownJobs = this.props.jobs[0];

    if (this.props.jobs.length > 1) {
      this.props.deleteJob(this.props.jobs[0]._id);
      window.location.reload(false);
    }

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