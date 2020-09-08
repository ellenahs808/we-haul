# WeHaul

[Live Demo](http://wehaulbetter.herokuapp.com/#/)

## Background and Overview

Has your significant other ever left your possessions in a box on the porch? Have you ever had to move but weren't ready? You don't have time to get a truck? No friends are available to help? WeHaul is the answer.

WeHaul is a web application which allow users to request movers with various size vehicles close by on short notice. 

Users can register as either drivers or requesters. Once they've logged in, they will be taken to the appropriate area of the site to either veiw active jobs to take or view the status of their own job-request.


## Written By:
* [Adrian Apodaca](https://github.com/mufasubhai)
* [Albert Chen](https://github.com/albert-d-chen)
* [Kodi Schiflett](https://github.com/kshiflett88)
* [Shanelle Valencia](https://github.com/ellenahs808)


## Technologies

* Front-end
    * Axios
    * node.js
    * React
    * Redux
* Back-end
    * Express
    * MongoDB
    * Passport
* Integrations:
    * MapBox
    * Google Maps Place Autocomplete

## Features:
### Driver registration and User registration
*Users are able to register as either drivers or requesters.*
![registration gif](https://github.com/ellenahs808/WeHaul/blob/master/frontend/src/components/images/signup.gif?raw=true)

### Driver job request with google maps autocomplete & Job Status Page
*If registered as a requester, a user can complete a form to submit a request and view their request on their status page.*
![requester show page](https://raw.githubusercontent.com/ellenahs808/WeHaul/master/frontend/src/components/images/userjob.gif)

### Driver job-list & status page
*Drivers are able to view all available jobs and select jobs. They are also able to mark jobs as complete.*
![driver show page](https://github.com/ellenahs808/WeHaul/blob/master/frontend/src/components/images/jobshow.gif?raw=true)

 
### Coming soon! Driver Ratings & Messaging


## Sample Code
Our JobMap needed to be relatively complex in order to operate correctly. We ended up using the MapBoxGL  component. In order to set this up properly we imported the mapBox script & keys. Additionally we created a new address slice of state that actions the users and drivers took could update. This allowed for a lateral flow of information into the appropriate components. Ass address information is updated the map re-renders and changes dynamically. We accomplished this through the use of react lifecycle methods. 

```javascript
class JobMap extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      map: null,
      directions: null,
      lng: -122.44,
      lat: 37.76,
      zoom: 11
    }
  }

  componentDidMount() {

  const bounds = [
    [-122.54, 37.6], // [west, south]
    [-122.34, 37.9], // [east, north]
  ];
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving'
    });

    map.addControl(directions, "top-left");
    if (this.props.type === 'hauler') {
      directions.setOrigin(this.props.address.startAddress);
      directions.setDestination(this.props.address.endAddress);
    } else {
      directions.setOrigin(this.props.requester[0].startAddress);
      directions.setDestination(this.props.requester[0].endAddress);
    }

    map.setMaxBounds(bounds);

    this.setState({map: map, directions: directions})
}

  componentDidUpdate(prevProps) {
    if ( prevProps.address.startAddress !== this.props.address.startAddress ) {
      this.state.directions.setOrigin(this.props.address.startAddress);
      this.state.directions.setDestination(this.props.address.endAddress);
    }
  }
  
  render() {
    
    return(
      
        <div ref={el => this.mapContainer = el} className="map_container" id="jobmap_jobshow" />
    )
  }
}


export default JobMap;
```

In order to allow for easy searching within San Francisco, we restricted the bounds of oru Google API and used the GooglePlaces Autocomplete package. Should further information be required down the road, we can parse data from a google maps API call, but for the time being we're only useing addresses. Our user form employs two inputs to post to our Jobs controller. 

```javascript

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
                        container: 'suggestion-container',
                        suggestion: 'suggestion'
                      }}
                      loader={
                        <div className="task-form-loader">Loading...</div>
                      }
                    />
                  </div>
                </div>
```






