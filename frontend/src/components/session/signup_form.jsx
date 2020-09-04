import React from 'react';
import { withRouter } from 'react-router-dom';


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            password: '',
            password2: '',
            userType: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            userType: this.state.userType
        };

        this.props.signup(user, this.props.history);
    }


    update(field) {
        return (e) =>
            this.setState({
                [field]: e.currentTarget.value
            });
    }


    renderErrors() {
        return (
            <ul className='errors'>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>{this.state.errors[error]}</li>
                ))}
            </ul>
        );
    }



    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <div className="signup-form">
          
                <div className="signup-header">Sign Up Now!</div>

                <div className="signup-info">
                  <input
                    type="text"
                    value={this.state.firstName}
                    onChange={this.update("firstName")}
                    placeholder="First Name"
                    className="signup-box"
                  />
                </div>
                <div className="signup-info">
                  <input
                    type="text"
                    value={this.state.lastName}
                    onChange={this.update("lastName")}
                    placeholder="Last Name"
                    className="signup-box"
                  />
                </div>
                <div className="signup-info">
                  <input
                    type="text"
                    value={this.state.phoneNumber}
                    onChange={this.update("phoneNumber")}
                    placeholder="XXX-XXX-XXXX"
                    className="signup-box"
                  />
                </div>
                <div className="signup-info">
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                    className="signup-box"
                  />
                </div>
                <div className="signup-info">
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                    className="signup-box"
                  />
                </div>
                <div className="signup-info">
                  <input
                    type="password"
                    value={this.state.password2}
                    onChange={this.update("password2")}
                    placeholder="Confirm Password"
                    className="signup-box"
                  />
                </div>
                <div className="signup-type">
                  <select
                    value={this.state.userType}
                    onChange={this.update("userType")}
                    className="signup-type-box"
                  >
                    <option value="">Select Type</option>
                    <option value="user">User</option>
                    <option value="hauler">Hauler</option>
                  </select>
                </div>

                <br />

                <div className="signup-submit">
                  <input
                    type="submit"
                    value="Submit"
                    className="signup-submit-button"
                  />
                </div>

                <div className='signup-errors'>
                  {this.renderErrors()}
                </div>
                
              </div>
            </form>
          </div>
        );
    }

}

export default withRouter(SignupForm);