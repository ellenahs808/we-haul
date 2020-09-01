import React from 'react';


class JobForm extends React.Component{
    constructor(props) {
        super(props);

        this.state = this.props.job

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props
          .createJob(this.state)       
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    render(){
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                onChange={this.update("type")}
                value={this.state.type}
                placeholder="What Car Type Do You Want?"
              />
              <input
                type="text"
                onChange={this.update("details")}
                value={this.state.details}
                placeholder="What do you want moved?"
              />
              <input
                type="text"
                onChange={this.update("startAddress")}
                value={this.state.startAddress}
                placeholder="Start"
              />
              <input
                type="text"
                onChange={this.update("endAddress")}
                value={this.state.endAddress}
                placeholder="End"
              />

              <button type="submit">
                Request a Hauler
              </button>
            </form>
          </div>
        );
    }
}

export default JobForm;