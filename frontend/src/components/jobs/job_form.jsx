import React from 'react';
// import keys from "../../config/keys_mapbox";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import car from '../images/car.png';
import van from '../images/van.png';
import truck from '../images/truck.png';
import jet from '../images/jet.png';


class JobForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = this.props.job

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createJob(this.state)       
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    
    handleChange(e) {
        e.preventDefault();
        let setAddress = {startAddress: e.target.value}
        this.setState(setAddress)
    }

    render(){
        return (
          <div className="job-form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="job-radio">
                <label>
                  <img src={car} className="type-icon" />
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
                  <img src={van} className="type-icon" />
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
                  <img src={truck} className="type-icon" />
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
                  <img src={jet} className="type-icon" />
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

              <div className="job-details">
                Details:
                <input
                  type="textarea"
                  onChange={this.update("details")}
                  value={this.state.details}
                  placeholder="Fill out move details."
                  className="job-details-box"
                />
              </div>

              <div className='job-address'>
                <div className='job-start-address'>
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
                    placeholder="825 Battery Street, San Francisco"
                    onSelect={({ description }) =>
                      this.setState({ startAddress: description })
                    }
                    loader={<div className="task-form-loader">Loading...</div>}
                  />
                </div>

                <div className='job-end-address'>
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
                    placeholder="825 Battery Street, San Francisco"
                    onSelect={({ description }) =>
                      this.setState({ endAddress: description })
                    }
                    loader={<div className="task-form-loader">Loading...</div>}
                  />
                </div>
              </div>

              <div className="job-submit">
                <button type="submit" className='job-submit-button'>
                  Request a Hauler.
                </button>
              </div>
            </form>
          </div>
        );
    }
}

export default JobForm;