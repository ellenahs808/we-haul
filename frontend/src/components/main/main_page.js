import React from 'react';
import Splash from './splash';

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <h1>WeHaul</h1>
                <Splash />
                <footer>
                    Copyright &copy; 2020 WeHaul
                </footer>
            </div>
        );
    }
}

export default MainPage;