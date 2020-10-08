import React from 'react';
// import keys from "../../config/keys_mapbox";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import car from '../images/car.png';
import van from '../images/van.png';
import truck from '../images/truck.png';
import jet from '../images/jet.png';
// import {Link, Redirect} from 'react-router-dom';

class JobForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = this.props.job

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this)
    }

    componentWillReceiveProps(nextProps) {
      this.setState({ errors: nextProps.errors })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.jobs.user.length === 1) {
          this.props.deleteJob(this.props.jobs.user[0]._id);
        }
      this.props.createJob(this.state)
        .then(() => {
          if (this.props.errors.length <= 0) {
            this.props.history.push('/userjob')
          }
        })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    renderErrors() {
      return (
        <ul className='errors'>
          {Object.keys(this.state.errors).map((error, i) => (
            <li key={`error-${i}`}>
              {this.state.errors[error]}
            </li>
          ))}
        </ul>
      );
    }

    render(){
        return (
          <div className="job-form-container-div">
            <div className="job-form-container">
              <form onSubmit={this.handleSubmit}>
                <div className="job-radio">
                  <label>
                    <img src={car} className="type-icon" alt="car-icon" />
                    <input
                      type="radio"
                      onChange={this.update("type")}
                      value="Car"
                      name="choice"
                      className="radio-button"
                    />
                    <div className="icon-type">Car</div>
                  </label>
                  <label>
                    <img src={van} className="type-icon" alt="van-icon" />
                    <input
                      type="radio"
                      onChange={this.update("type")}
                      value="Van"
                      name="choice"
                      className="radio-button"
                    />
                    <div className="icon-type">Van</div>
                  </label>
                  <label>
                    <img src={truck} className="type-icon" alt="truck-icon" />
                    <input
                      type="radio"
                      onChange={this.update("type")}
                      value="Truck"
                      name="choice"
                      className="radio-button"
                    />
                    <div className="icon-type">Truck</div>
                  </label>
                  <label>
                    <img src={jet} className="type-icon" alt="jet-icon" />
                    <input
                      type="radio"
                      onChange={this.update("type")}
                      value="Jet"
                      name="choice"
                      className="radio-button"
                    />
                    <div className="icon-type">Jet</div>
                  </label>
                </div>

                <div className="job-form-pad">
                  <label className="details-label">
                    Details:
                    <input
                      type="textarea"
                      onChange={this.update("details")}
                      value={this.state.details}
                      placeholder="Fill out move details."
                      className="job-details-box"
                    />
                  </label>
                </div>

                <div className="job-address">
                  <div className="job-start-address">
                    <GooglePlacesAutocomplete
                      // apiKey={keys.googleMapsKey}
                      autocompletionRequest={{
                        bounds: [
                          { lat: 37.6, lng: -122.54 },
                          { lat: 37.9, lng: -122.34 },
                        ],
                        componentRestrictions: {
                          country: ["us"],
                        },
                      }}
                      placeholder="Enter Start Address..."
                      onSelect={({ description }) =>
                        this.setState({ startAddress: description })
                      }
                      suggestionsClassNames={{
                        container: "suggestion-container",
                        suggestion: "suggestion",
                      }}
                      loader={
                        <div className="task-form-loader">Loading...</div>
                      }
                    />
                  </div>

                  <div className="job-end-address">
                    <GooglePlacesAutocomplete
                      autocompletionRequest={{
                        bounds: [
                          { lat: 37.6, lng: -122.54 },
                          { lat: 37.9, lng: -122.34 },
                        ],
                        componentRestrictions: {
                          country: ["us"],
                        },
                      }}
                      placeholder="Enter End Address..."
                      onSelect={({ description }) =>
                        this.setState({ endAddress: description })
                      }
                      suggestionsClassNames={{
                        container: "suggestion-container",
                        suggestion: "suggestion",
                      }}
                      loader={
                        <div className="task-form-loader">Loading...</div>
                      }
                    />
                  </div>
                </div>
                  <div className="icon-type">Enter a location in San Francisco. Other service areas coming soon!</div>

                <div className="job-submit">
                  <button type="submit" className="job-submit-button">
                    Request a Hauler.
                  </button>
                </div>

                <div className="form-errors">{this.renderErrors()}</div>
              </form>
            </div>
          </div>
        );
    }
}

export default JobForm;