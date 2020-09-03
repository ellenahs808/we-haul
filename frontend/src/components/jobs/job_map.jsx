import React, { useEffect, useState, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import { mapBoxPublicKey } from '../../config/keys_mapbox';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

  const JobMap = (props) => {
      const lng = -122.44;
      const lat = 37.76;
      const zoom = 11;
     
   const [map, setMap] = useState(null);
   const mapContainer = useRef(null);
  //  const start = useState(props.address.startAddress)
  //  const end = useState(props.address.endAddress)

    useEffect(() => {
      mapboxgl.accessToken = mapBoxPublicKey;
    const bounds = [
      [-122.54, 37.6], // [west, south]
      [-122.34, 37.9], // [east, north]
    ];

    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current, // container id
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat], // starting position
        zoom: zoom, // starting zoom
      });
  
      const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      });
      map.addControl(directions, "top-left");
      console.log(props.address.startAddress)
      console.log(props.address.endAddress)
      directions.setOrigin(props.address.startAddress);
      directions.setDestination(props.address.endAddress);
      // directions.setOrigin("geary st san francisco");
      // directions.setDestination("market street san francisco");

      map.setMaxBounds(bounds);
      setMap(map);
    };
    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

    // console.log(start)
    return (
      <div className="map_wrapper">
          <div>{props.address.startAddress}</div>
          <div>{props.address.endAddress}</div>
            <div ref={el => mapContainer.current = el} className="map_container" />
      </div>
    );
  
}

export default JobMap;

