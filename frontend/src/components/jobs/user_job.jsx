import React from 'react';
import keys from '../../config/keys_mapbox'
import '../../styles/user_job.scss';
import JobFormContainer from './job_form_container'
import UserJobMapContainer from "./user_job_map_container";

class UserJob extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD

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
=======
>>>>>>> master
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

  // componentDidUpdate() {
  //   this.props.fetchJob(this.props.currentUser.id)
    
  // }


  this.setState(() => ({
    rating: this.props.haulerRating[1], driver: this.props.jobs[0].driver
  }), () => this.props.updateUser(this.state))
 };


  
  
  statusUpdate() {
    if (this.props.jobs[0].status === 0) {
      return <p className="job-item-details">Waiting for hauler...</p>;
    } else if (this.props.jobs[0].status === 1) {
      return <p className="job-item-details">A hauler has taken your request!</p>;
    } else {
<<<<<<< HEAD
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
      
=======
      return <p className="job-item-details">Your request has been completed!</p>;
>>>>>>> master
    }
  };

  


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