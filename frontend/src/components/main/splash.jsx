import React from 'react';
import { withRouter } from "react-router-dom";


class Splash extends React.Component {
    render() {
        return (
            <div>
                <img src="../../../public/run.jpg" height='200px' width='200px'/>
            </div>
        )
    }
}


export default withRouter(Splash);