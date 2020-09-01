import React from 'react';
import Splash from './splash';
import JobMap from '../job/job_map';
import JobForm from '../jobs/job_form_container';

class MainPage extends React.Component {

    render() {
        return (
            <div className='full_page'>
                <h1>WeHaul</h1>
                <JobForm />
                <Splash />
                <footer>
                    Copyright &copy; 2020 WeHaul
                </footer>
                <JobMap />

            </div>
        );
    }
}

export default MainPage;