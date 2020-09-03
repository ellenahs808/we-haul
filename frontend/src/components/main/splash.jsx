import React from 'react';
import { withRouter } from "react-router-dom";
import splashImg from '../images/splash.jpg';
import '../../styles/home.scss';


class Splash extends React.Component {
    render() {
        return (
          <div className="wave-container">
            <img className="wave" src={splashImg} alt="splash" width="100%" />
            <svg
              className="svg-wave"
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1439 320"
            >
              <path
                className="cls-1"
                d="M0,160L40,165.3C80,171,160,181,240,170.7C320,160,400,128,480,122.7C560,117,640,139,720,165.3C800,192,880,224,960,229.3C1040,235,1120,213,1200,186.7C1280,160,1360,128,1400,112L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                transform="translate(-1 -61.42)"
              />
            </svg>
          </div>
        );
    }
}





export default withRouter(Splash);