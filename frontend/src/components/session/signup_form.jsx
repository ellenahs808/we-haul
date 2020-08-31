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
            password2: this.state.password2
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
            <ul>
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
              <div>
                <input
                  type="text"
                  value={this.state.firstName}
                  onChange={this.update("firstName")}
                  placeholder="First Name"
                />
                <br />
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={this.update("lastName")}
                  placeholder="Last Name"
                />
                <br />
                <input
                  type="text"
                  value={this.state.phoneNumber}
                  onChange={this.update("phoneNumber")}
                  placeholder="XXX-XXX-XXXX"
                />
                <br />
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
                <input
                    type="password"
                    value={this.state.password2}
                    onChange={this.update("password2")}
                    placeholder="Confirm Password"
                />
                <br />
                <input type="submit" value="Submit"/>
                {this.renderErrors()}
              </div>
            </form>
          </div>
        );
    }

}

export default withRouter(SignupForm);