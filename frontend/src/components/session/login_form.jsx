import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
        let { email, password, firstName, lastName, phoneNumber, userType } = demoUser;

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
        let {email, password, firstName, lastName, phoneNumber, userType} = demoHauler;
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

        this.props.login(user);
    }

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
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
                  {" "}
                  <Typical
                    loop={2000}
                    wrapper="b"
                    steps={[
                      1000,
                      "Shanelle sux.",
                      1000,
                      "shanelle sucks",
                      1000,
                      "shonelle boo",
                    ]}
                  />{" "}
                </p> */}
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                />
                <br />
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                />
                <br />
                <select
                  value={this.state.userType}
                  onChange={this.update("userType")}
                >
                  <option value="">Select Type</option>
                  <option value="user">User</option>
                  <option value="hauler">Hauler</option>
                </select>

                <input type="submit" value="Submit" />

                <button type="submit" onClick={this.loginDemoUser}>
                  DEMO USER SIGN IN
                </button>

                <button type="submit" onClick={this.loginDemoHauler}>
                  DEMO HAULER SIGN IN
                </button>

                {this.renderErrors()}
              </div>
            </form>
          </div>
        );
    }
}

export default withRouter(LoginForm);