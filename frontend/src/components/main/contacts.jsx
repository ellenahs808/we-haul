import React from 'react';
import adrian from '../images/adrian.png';
import albert from '../images/albert.png';
import kodi from '../images/kodi.png';
import shanelle from '../images/shanelle.png';


class Contacts extends React.Component {

    render() {
        return (
            <div className="contacts-container">
                <div className="contact">
                    <a href="https://github.com/mufasubhai"><img src={adrian}  className="contact-img"/></a>
                    <div class="middle">
                        <div class="text">Adrian</div>
                    </div>
                </div>
                <div className="contact">
                    <a href="https://github.com/albert-d-chen"><img src={albert} height="100px" width="100px" className="contact-img"/></a>
                    <div class="middle">
                        <div class="text">Albert</div>
                    </div>
                </div>
                <div className="contact">
                    <a href="https://github.com/kshiflett88"><img src={kodi} height="100px" width="100px" className="contact-img"/></a>
                    <div class="middle">
                        <div class="text">Kodi</div>
                    </div>
                </div>
                <div className="contact">
                    <a href="https://github.com/ellenahs808"><img src={shanelle} height="100px" width="100px" className="contact-img"/></a>
                    <div class="middle">
                        <div class="text">Shanelle</div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contacts;
