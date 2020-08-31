import React from 'react';
import { withRouter, link } from 'react-router-dom';
import Typical from 'react-typical';
import keys from '../../config/keys_mapbox'


const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297,
  }, // San Francisco coords
  zoom: 13,
};


class JobMap extends React.Component {
  constructor(props) {
    super(props);
}



     

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 13,
    };

    // wrap this.mapNode in a Google Map
    // this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

    //   const callScript = () => {
    //     const script = document.createElement('script');
    //     script.className = 'autocomplete'
    //     script.src = `https://maps.googleapis.com/maps/api/js?key=${keys.geocodeKey}&libraries=places`;
    //     script.async = true;
    //     document.body.appendChild(script);
    // };

  render() {
    return <div id="map-container" ref={ map => this.mapNode = map }> This is the map container</div>;
  }
}


export default JobMap;