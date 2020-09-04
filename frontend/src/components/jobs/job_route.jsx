import React from 'react';

class JobRoutes extends React.Component{
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <p>'hello'</p>
                <div>{this.props.details}</div>
            </div>
        )
    }
}

export default JobRoutes;

