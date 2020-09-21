import React, {useEffect} from 'react';
import Splash from './splash';

// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import keys from '../../config/keys_mapbox'
// import { Form } from 'react-bootstrap'
import JobForm from '../jobs/job_form_container';
// import UserJob from '../jobs/user_job_container';
// import {Link} from 'react-router-dom';


const MainPage = (props) => {


        const callScript = () => {
        const script = document.createElement("script");
        script.className = "autocomplete";
        script.src = `https://maps.googleapis.com/maps/api/js?key=${keys.googleMapsKey}&libraries=places`;
        script.async = true;
        document.body.appendChild(script);
        };


        useEffect(() => {
            callScript();
            
        })
 
        return (
            <div className='full_page'>
                
                <Splash />
                <JobForm />


                <footer>
                    Copyright &copy; 2020 WeHaul
                </footer>
              


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