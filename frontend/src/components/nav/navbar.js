import React from 'react';
import { Link } from 'react-router-dom'



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
                <div>
                    <div><Link to={'/signup'} onClick={() => this.props.openModal('signup')} >Signup</Link></div>
                    <div><Link to={'/login'} onClick={() => this.props.openModal('login')} >Login</Link></div>
                </div>
            );
        }
    }

    render() {
 
        return (
          <div>
            <h1>Shanelle Sux</h1>
                <div onClick={e => e.stopPropagation()} >
                    <div>{this.getLinks()}</div>
                </div>

            {/* <div>
                if {this.props.loggedIn} {
                    <div>
                        <div>Welcome</div>
                        <div><Link to='/jobs'>Jobs</Link></div>
                        <button onClick={this.logoutUser}>Logout</button>
                    </div>
                } else {
                    <div>
                        <div><Link to={'/signup'} onClick={() => this.props.openModal('signup')} >Signup</Link></div>
                        <div><Link to={'/login'} onClick={() => this.props.openModal('login')} >Login</Link></div>
                    </div>
                };
            </div> */}

          </div>
        );
    }
}

export default NavBar;