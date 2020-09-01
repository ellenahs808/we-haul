import React from 'react';
import Splash from './splash';
import JobMap from '../job/job_map'

class MainPage extends React.Component {

    render() {
        return (
            <div className='full_page'>
                <h1>WeHaul</h1>

                <footer>
                    Copyright &copy; 2020 WeHaul
        </footer>
                <JobMap />

            </div>
        );
    }
}

export default MainPage;