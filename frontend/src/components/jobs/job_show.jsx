import React from 'react';


class JobShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.job
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  
  handleUpdate() {

    this.setState(() => ({
      status: 1, driver: this.props.currentUser.id
    }), () => this.props.updateJob(this.state))

  }

  handleComplete() {

    this.setState(() => ({
      status: 2
    }), () => this.props.updateJob(this.state))

  }

  render() {
    // debugger
    return (
      <div className="job-idx-pad">
        <div className="job-idx-left-container">
          <label className="job_label">
            <div className='job-title-haul'>Haul Details:</div>
            <div className="job-info">{this.props.job.details}</div>
          </label>
          <label className="job_label">
            <div className='job-title'>Origin:</div>
            <div className="job-info">{this.props.job.startAddress}</div>
          </label>
          <label className="job_label">
            <div className='job-title'>Destination:</div>
            <div className="job-info">{this.props.job.endAddress}</div>
          </label>
          <div className='div-btn'>
            <button
              className='route-btn'
              onClick={() =>
                this.props.updateAddress({
                  startAddress: this.props.job.startAddress,
                  endAddress: this.props.job.endAddress,
                })
              }
              >
              View Route
            </button>
            {this.props.job.status === 0 ? <button className='accept-btn' onClick={() => this.handleUpdate()}>Accept Job</button>
            : this.props.job.status === 1 ? <button className='complete-btn' onClick={() => this.handleComplete()}>Complete Job</button>
            : <button className='complete-btn' onClick={() => this.handleComplete()}>Complete</button>
            }
            
            {/* <button className='accept-btn' onClick={() => this.handleUpdate()}>Accept Job</button> */}
          </div>
        </div>
      </div>
    )}
  }

  
  
export default JobShow;


    