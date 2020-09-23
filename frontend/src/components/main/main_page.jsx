import React, {useEffect} from 'react';
import Splash from './splash';

import keys from '../../config/keys_mapbox'
import JobForm from '../jobs/job_form_container';
import Contacts from './contacts';



const MainPage = (props) => {

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

