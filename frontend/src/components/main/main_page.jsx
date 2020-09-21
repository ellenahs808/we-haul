import React, {useEffect} from 'react';
import Splash from './splash';

import keys from '../../config/keys_mapbox'
import JobForm from '../jobs/job_form_container';

// import UserJob from '../jobs/user_job_container';
// import {Link} from 'react-router-dom';
import Contacts from './contacts';



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

            {
                (!props.session.user) ? null : (props.session.user.userType === 'user') ? <JobForm /> : null
            }

            <footer className="footer">
                <Contacts />
                <div className="copyright">Copyright &copy; 2020 WeHaul</div>
            </footer>
        
        </div>

    );
    
}

export default MainPage;

