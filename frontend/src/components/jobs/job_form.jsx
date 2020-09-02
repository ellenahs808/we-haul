import React from 'react';
import keys from "../../config/keys_mapbox";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";


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
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                onChange={this.update("type")}
                value={this.state.type}
                placeholder="Car Type"
              />
              <input
                type="text"
                onChange={this.update("details")}
                value={this.state.details}
                placeholder="Fill out move details."
              />
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

                onSelect={({description}) =>
                  this.setState({ startAddress: description })
                }

                loader={<div className="task-form-loader">Loading...</div>}
              />
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

              <button type="submit">Request a Hauler</button>
            </form>
          </div>
        );
    }
}

export default JobForm;