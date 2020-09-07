import React from 'react';
import { withRouter } from 'react-router-dom';
import Typical from 'react-typical';

import '../../styles/forms.scss';


class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            userType: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
        this.loginDemoHauler = this.loginDemoHauler.bind(this);
    }

    loginDemoUser(e) {
        e.preventDefault();
        const demoUser = { email: 'shanelle@wehaul.com', password: 'password', firstName: 'Shanelle', lastName: 'Valencia', phoneNumber: '1234567890', userType: 'user' };
        let { email, password, userType } = demoUser;

        let interval = 100;

        let login = () => {
            this.props.login(this.state);
        }

        if (this.state.email !== email) {
            let inputEmail = setInterval(() => {
                if (this.state.email !== email) {
                    let tempEmail = email.slice(0, this.state.email.length + 1);
                    this.setState({ email: tempEmail })
                } else {
                    clearInterval(inputEmail);
                    fillPassword();
                }
            }, interval)
        }

        let fillPassword = () => {
            let inputPassword = setInterval(() => {
                if (this.state.password !== password) {
                    let tempPassword = password.slice(0, this.state.password.length + 1);
                    this.setState({ password: tempPassword })
                } else {
                    clearInterval(inputPassword);
                    fillType();
                }
            }, interval)
        }

        let fillType = () => {
            let inputType = setInterval(() => {
                if (this.state.userType !== userType) {
                    this.setState({userType: 'user'})
                } else {
                    clearInterval(inputType);
                    login();
                }
             }, interval)
        }

    }

    loginDemoHauler(e) {
        e.preventDefault();

        const demoHauler = {email: 'kodi@wehaul.com', password:'password', firstName: 'Kodi', lastName: 'Codes', userType: 'hauler'}
        let {email, password, userType} = demoHauler;
        let interval = 100;

        let login = () => {
          this.props.login(this.state);
        };

        if (this.state.email !== email) {
          let inputEmail = setInterval(() => {
            if (this.state.email !== email) {
              let tempEmail = email.slice(0, this.state.email.length + 1);
              this.setState({ email: tempEmail });
            } else {
              clearInterval(inputEmail);
              fillPassword();
            }
          }, interval);
        }

        let fillPassword = () => {
          let inputPassword = setInterval(() => {
            if (this.state.password !== password) {
              let tempPassword = password.slice(
                0,
                this.state.password.length + 1
              );
              this.setState({ password: tempPassword });
            } else {
              clearInterval(inputPassword);
              fillType();
            }
          }, interval);
        };

        let fillType = () => {
          let inputType = setInterval(() => {
            if (this.state.userType !== userType) {
              this.setState({ userType: "hauler" });
            } else {
              clearInterval(inputType);
              login();
            }
          }, interval);
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/');
        }
        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user)
          
    }

    renderErrors() {
        return (
            <ul className='errors'>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`} >
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
          <div onClick={(e) => e.stopPropagation()}>
            <form onSubmit={this.handleSubmit}>
              <div className="login-form">
                {/* <p className="typical">
                  <Typical
                    loop={10000}
                    wrapper="b"
                    steps={[
                      2000,
                      "We Haul. ",
                      2000,
                      "We Move. ",
                      2000,
                      "We Code. ",
                    ]}
                  />
                </p> */}
                <label className="login-info">
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                    className="login-box1"
                  />
                </label>

                <br />

                <label className="login-info1">
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                    className="login-box2"
                  />
                </label>

                <br />
                {/* <div className='login-type'>
                  <select
                    value={this.state.userType}
                    onChange={this.update("userType")}
                    className='login-type-box'>
                    <option value="">Select Type</option>
                    <option value="user">User</option>
                    <option value="hauler">Hauler</option>
                  </select>
                </div> */}
                
                <div className='login-submit'>
                  <button type='submit' className='login-submit-button'>Submit</button>
                  {/* <input type="submit" value="Submit" /> */}
                </div>
                
                <div className='demo'>
                  <button type="submit" onClick={this.loginDemoUser} className='demo-user-button'>
                    DEMO USER
                  </button>
                  <button type="submit" onClick={this.loginDemoHauler} className='demo-hauler-button'>
                    DEMO HAULER
                  </button>
                </div>

                <div className='login-errors'>
                  {this.renderErrors()}
                </div>

              </div>
            </form>
          </div>
        );
    }
}

export default withRouter(LoginForm);