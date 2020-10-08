import React from 'react';
import Splash from './splash';
import JobForm from '../jobs/job_form_container';
import Contacts from './contacts';



const MainPage = (props) => {

    return (
        <div className='full_page'>
            

            <Splash />

            {
                (!props.session.user) ? null : (props.session.user.userType === 'user') ? <JobForm /> : null
            }

        
            <Contacts />
   
        
        </div>

    );
    
}

export default MainPage;

