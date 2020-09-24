import React, {useEffect} from 'react';
import Splash from './splash';
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
