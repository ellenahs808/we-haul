import React, {useEffect} from 'react';
import JobMap from '../job/job_map'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import keys from '../../config/keys_dev_front'
import { Form } from 'react-bootstrap'



const MainPage = (props) => {


        // const callScript = () => {
        // const script = document.createElement("script");
        // script.className = "autocomplete";
        // script.src = `https://maps.googleapis.com/maps/api/js?key=${keys.googleMapsKey}&libraries=places`;
        // script.async = true;
        // document.body.appendChild(script);
        // };


        // useEffect(() => {
        //     callScript();
            
        // })


    
        return (
          <div className="full_page">
            <h1>WeHaul</h1>
            <footer>Copyright &copy; 2020 WeHaul</footer>
            <JobMap />
            <form>
              <GooglePlacesAutocomplete
                apiKey={keys.googleMapsKey}
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
              {/* <iframe
                src={`https://www.google.com/maps/embed/v1/directions?key=${keys.googleMapsKey}&origin=825+Battery+Street,+San+Francisco,+CA,+USA&destination=490+Post+Street,+San+Francisco,+CA,+USA`}
                width="600"
                height="450"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
       
              ></iframe> */}
            </form>
          </div>
        );
    
}

export default MainPage;

// https://www.google.com/maps/embed/v1/directions
//   ?key=YOUR_API_KEY
//   &origin=825+Battery+Street,+San+Francisco,+CA,+USA
//   &destination=490+Post+Street,+San+Francisco,+CA,+USA

// 825 Battery Street, San Francisco, CA, USA 
// 490 Post Street, San Francisco, CA, USA 