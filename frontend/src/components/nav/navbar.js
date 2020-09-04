import React from 'react';
import { Link } from 'react-router-dom'
import "../../styles/navbar.scss";
import logoImg from '../images/logo.png';
import trucklogo from '../images/trucklogo.png'


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
            if (this.props.session.user.userType === 'hauler'){
            return (
                <div>
                    <div><Link to='/'><img src={trucklogo} className='logo-nav'></img></Link></div>
                    <div className='nav-jobs'><Link to='/jobs' className='jobs-link'>Jobs</Link></div>
                    <div className='nav-logout'><button onClick={this.logoutUser} className='nav-logout-button'>Logout</button></div>
                </div>
            )} else{
                return (
                <div>
                    <div><Link to='/'><img src={trucklogo} className='logo-nav'></img></Link></div>
                    <div className='nav-jobs'><Link to='/userjob' className='jobs-link'>Requests</Link></div>
                    <div className='nav-logout'><button onClick={this.logoutUser} className='nav-logout-button'>Logout</button></div>
                </div>
            )}
        } else {
            return (
                <div className='nav-session'>
                    <div><Link to='/'><img src={trucklogo} className='logo-nav'></img></Link></div>
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