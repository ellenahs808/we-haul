import React, {useEffect} from 'react';
import Splash from './splash';

// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import keys from '../../config/keys_mapbox'
import JobForm from '../jobs/job_form_container';



const MainPage = (props) => {



     
        
        
        return (
          <div className="full_page">
            <Splash />
            <JobForm />



            <footer>Copyright &copy; 2020 WeHaul</footer>

            
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