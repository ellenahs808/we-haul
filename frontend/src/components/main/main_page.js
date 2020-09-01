import React from 'react';
import Splash from './splash';
import JobMap from '../job/job_map'

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <h1>WeHaul</h1>
                <Splash />
                <JobMap />
                <footer>
                    Copyright &copy; 2020 WeHaul
                </footer>
            </div>
        );
    }
}

export default MainPage;