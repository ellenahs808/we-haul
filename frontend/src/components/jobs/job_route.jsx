import React from 'react';

class JobRoutes extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        // console.log(this.props)
        return(
            <div>
                <p>'hello'</p>
                <div>{this.props.details}</div>
            </div>
        )
    }
}

export default JobRoutes;

