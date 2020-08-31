import React from 'react';
import JobMap from '../job/job_map'

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <h1>WeHaul</h1>
                <JobMap />
                <footer>
                    Copyright &copy; 2020 WeHaul
        </footer>
            </div>
        );
    }
}

export default MainPage;