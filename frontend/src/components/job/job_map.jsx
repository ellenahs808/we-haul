import React, { useEffect, useState, useRef } from "react";
import { withRouter, link } from 'react-router-dom';
import Typical from 'react-typical';
import mapboxgl from 'mapbox-gl';
import { mapBoxPublicKey } from '../../config/keys_dev_front';




    
  const JobMap = (props) => {
      const lng = -122.44;
      const lat = 37.76;
      const zoom = 11;
     
   const [map, setMap] = useState(null);
   const mapContainer = useRef(null);

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
      map.addControl(new mapboxgl.NavigationControl());
      map.addControl(
        new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );
      map.setMaxBounds(bounds);
      setMap(map);
    };
    if (!map) initializeMap({ setMap, mapContainer });

  }, [map]);

 
// Add zoom and rotation controls to the map.

    return (
      <div>
            <div ref={el => mapContainer.current = el} className="map_container" />
      </div>
    );
  
}


export default JobMap;





  //   const callScript = () => {
    //     const script = document.createElement('script');
    //     script.className = 'autocomplete'
    //     script.src = `https://maps.googleapis.com/maps/api/js?key=${keys.geocodeKey}&libraries=places`;
    //     script.async = true;
    //     document.body.appendChild(script);
    // };
