import React from 'react';
import { Link } from 'react-router-dom'
import "../../styles/navbar.scss";
import logoImg from '../images/logo.png';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        // this.getLinks = this.getLinks.bind(this);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <div>Welcome</div>
                    <div><Link to='/jobs'>Jobs</Link></div>
                    <button onClick={this.logoutUser}>Logout</button>
                </div>
            );
        } else {
            return (
                <div className='nav-session'>
                    <div><button className='nav-signup' type="submit" onClick={() => this.props.openModal('signup')} >Signup</button></div>
                    <div><button className='nav-login' type="submit" onClick={() => this.props.openModal('login')} >Login</button></div>
                </div>
            );
        }
    }

    render() {
 
        return (
          <div className='navbar'>
            <div onClick={e => e.stopPropagation()} className='nav-session' >
                {this.getLinks()}
            </div>


          </div>
        );
    }
}

export default NavBar;