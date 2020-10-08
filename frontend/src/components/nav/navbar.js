import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.scss";
// import logoImg from '../images/logo.png';
import trucklogo from "../images/trucklogo.png";
import StarRatings from "react-star-ratings";


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.user = {};
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.fetchJob(this.props.currentUser.id)
    }
  }



  componentDidUpdate() {
    window.location.reload(false);
  }
  
  // componentWillUpdate() {
  //     window.location.reload(false);
  // }
  
  // render() {

  getLinks() {
    if (this.props.loggedIn) {
      const starRate =
        this.props.currentUser.rating / this.props.currentUser.numberOfRatings;
      const userName = this.props.currentUser.firstName;
      if (
        this.props.session.user.userType === "hauler" &&
        this.props.currentUser.numberOfRatings > 0
      ) {
        return (
          <div>
            <div className="nav-rating">
              <p className="nav-welcome">Welcome, {userName} your rating is:</p>
              <div className="nav-stars">
                <StarRatings
                  rating={starRate}
                  ingnoreInlineStyles={false}
                  starDimension="22px"
                  starRatedColor="purple"
                  numberOfStars={5}
                  name="rating"
                  starSpacing="1px"
                />
              </div>
            </div>
            <div>
              <button
                className="nav-hauler-instruct"
                onClick={() => this.props.openModal("instructions")}
              >
                Instructions
              </button>
            </div>
            <div className="nav-jobs">
              <Link to="/jobs" className="jobs-link">
                Jobs
              </Link>
            </div>
            <div className="nav-logout">
              <button onClick={(e) => {this.props.closeModal(); this.logoutUser(e);}} className="nav-logout-button">
                Logout
              </button>
            </div>
          </div>
        );
      } else if (
        this.props.session.user.userType === "hauler" &&
        this.props.currentUser.numberOfRatings === 0
      ) {

        return (
          <div>
            <div className="nav-rating">
              <p className="nav-welcome">Welcome, {userName}</p>
            </div>
            <div className="nav-jobs">
              <Link to="/jobs" className="jobs-link">
                Jobs
              </Link>
            </div>
            <div className="nav-logout">
              <button onClick={(e) => {this.props.closeModal(); this.logoutUser(e);}} className="nav-logout-button">
                Logout
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div className="nav-rating">
              <p className="nav-welcome">Welcome, {userName}</p>
            </div>
            <div><button className='nav-user-instruct' onClick={() => this.props.openModal('instructions')}>Instructions</button></div>
            <div className="nav-jobs">
              <Link to="/userjob" className="jobs-link">
                Requests
              </Link>
            </div>
            <div className="nav-logout">
              <button onClick={(e) => {this.props.closeModal(); this.logoutUser(e);}} className="nav-logout-button">
                Logout
              </button>
            </div>
          </div>
        );
      }
    } else {
      return (
        <div>
          <div>
            <button
              className="nav-signup"
              type="submit"
              onClick={() => this.props.openModal("signup")}
            >
              Signup
            </button>
          </div>
          <div>
            <button
              className="nav-login"
              type="submit"
              onClick={() => this.props.openModal("login")}
            >
              Login
            </button>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="navbar">
        <div onClick={(e) => e.stopPropagation()} className="nav-session">
          <div className="nav-session">
            <div>
              <Link to="/">
                <img
                  src={trucklogo}
                  className="logo-nav"
                  alt="truck-logo"
                ></img>
              </Link>
            </div>
            {this.getLinks()}
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
