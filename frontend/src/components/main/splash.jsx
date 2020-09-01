import React from 'react';
import { withRouter } from "react-router-dom";
import splashImg from '../images/splash.jpg';
import '../../styles/home.scss';


class Splash extends React.Component {
    render() {
        return (
          <div>
            <img className="wave" src={splashImg} alt="splash" width="100%" />
          </div>
        );
    }
}





export default withRouter(Splash);