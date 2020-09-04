import React from "react";
import mapboxgl from 'mapbox-gl';
// import { mapBoxPublicKey } from '../../config/keys_mapbox';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'


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
    // const [map, setMap] = useState(null);
  }
  // mapboxgl.accessToken = mapBoxPublicKey
  
  componentDidMount() {

  const bounds = [
    [-122.54, 37.6], // [west, south]
    [-122.34, 37.9], // [east, north]
  ];
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving'
    });

    map.addControl(directions, "top-left");
    directions.setOrigin(this.props.address.startAddress);
    directions.setDestination(this.props.address.endAddress);

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
      
        <div ref={el => this.mapContainer = el} className="map_container" />
    )
  }
}


export default JobMap;