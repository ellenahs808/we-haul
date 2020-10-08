import React from 'react';
import '../../styles/user_job.scss';
import JobFormContainer from './job_form_container'
import UserJobMapContainer from "./user_job_map_container";
import Contacts from '../main/contacts'


class UserJob extends React.Component {
  constructor(props) {
    super(props);

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
      if (this.props.jobs[0].driver) {
        this.props.fetchUser(this.props.jobs[0].driver)

      }
    }

  }

 update(field) {
   return(e) => this.setState({
     [field]: parseInt(e.currentTarget.value), id: this.props.jobs[0].driver
    })


 };


 handleSubmit(e) {
  e.preventDefault();

  let newRating = this.props.haulerRating.rating + this.state.rating;
  let newRatingCount = this.props.haulerRating.numberOfRatings + 1; 
  let driverId = this.props.haulerRating.id;

  let updatedUser = {_id: driverId, rating: newRating, numberOfRatings: newRatingCount };
  // console.log(updatedUser)
  this.props.updateUser(updatedUser);
  this.props.deleteJob(this.props.jobs[0]._id);
  window.location.reload();

 };


  statusUpdate() {
    let firstName = this.props.haulerRating.firstName
    let lastName = this.props.haulerRating.lastName
    let phoneNumber = this.props.haulerRating.phoneNumber
    if (this.props.jobs[0].status === 0) {
      return <p className="job-item-details">Waiting for hauler...</p>;
    } else if (this.props.jobs[0].status === 1) {
      console.log(this.props.haulerRating.firstName)
      return (
        <p className="job-item-details">
          {firstName} {lastName} has taken your request!
        <br/><br />
        
        <i class="fas fa-phone-alt">   {phoneNumber}</i>
        </p>
      );
    } else {

        // debugger
        return (
          <div>
            <div>Your request has been completed!</div>
            <br />
            <div className="ratings-div">
              <h2>Please submit a rating:</h2>
              {/* <form> */}
              <label>
                1
                <input
                  type="radio"
                  value="1"
                  name="rating"
                  checked={(this.state.rating === 1)}
                  onChange={this.update("rating")}
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
                />
              </label>
              <br /><br />
              <input
                type="submit"
                value="Submit Rating"
                onClick={(e) => this.handleSubmit(e)}
                className="ratings-submit-btn"
              />
            </div>

            </div>
        );

    }
  };

  


  render() {
    const ownJobs = this.props.jobs[0];

    // if (this.props.jobs.length > 1) {
    //   // debugger
    //   this.props.deleteJob(this.props.jobs[0]._id);
    //   window.location.reload(false);
    // }
    if (this.props.jobs.length === 0) {
      return (
        <div>
          <h1 className="job-form-message">You have no current request! Create one below:</h1>
          <div className="user_job_form">
            <JobFormContainer />
            <Contacts />
          </div>
        </div>
 
      )
    } else { 
    
    return (
      <div>
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

            <span>

              <button
                className="route-btn route-btn-2"
                onClick={() =>
                  this.props.updateAddress({
                    startAddress: ownJobs.startAddress,
                    endAddress: ownJobs.endAddress,
                  })
                }
              >
                View Route
              </button>
              <button
                className="delete-btn"
                onClick={() => {
                  this.props.deleteJob(ownJobs._id);
                  window.location.reload();
                }}
              >
                Delete
              </button>
            </span>
            </div>
            <div className="user-map-container">
              <div className="map-div">
                <UserJobMapContainer />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Contacts />
        </div>
      </div>
    );
    }
  }

};


export default UserJob;