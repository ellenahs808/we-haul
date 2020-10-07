import React from 'react';
import adrian from '../images/adrian.png';
import albert from '../images/albert1.png';
import kodi from '../images/kodi.png';
import shanelle from '../images/shanelle.png';


class Contacts extends React.Component {

    render() {
        return (
          <div>
            <div className="contacts-container">
              <div className="contact">
                <a href="https://github.com/mufasubhai">
                  <img src={adrian} 
                  className="contact-img"
                  alt="Adrian"
                  />
                  <div className="middle">
                    <div className="text">Adrian</div>
                  </div>
                </a>
              </div>
              <div className="contact">
                <a href="https://github.com/albert-d-chen">
                  <img
                    src={albert}
                    alt="Albert"
                    className="contact-img"
                  />
                <div className="middle">
                  <div className="text">Albert</div>
                </div>
                </a>
              </div>
              <div className="contact">
                <a href="https://github.com/kshiflett88">
                  <img
                    src={kodi}
                    alt="Kodi"
                    className="contact-img"
                  />
                <div className="middle">
                  <div className="text">Kodi</div>
                </div>
                </a>
              </div>
              <div className="contact">
                <a href="https://github.com/ellenahs808">
                  <img
                    src={shanelle}
                    alt="Shanelle"
                    className="contact-img"
                  />
                <div className="middle">
                  <div className="text">Shanelle</div>
                </div>
                </a>
              </div>
            </div>
            <div className="copyright">Copyright &copy; 2020 WeHaul</div>
          </div>
        );
    }
}


export default Contacts;
