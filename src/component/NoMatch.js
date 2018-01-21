import React, { Component } from 'react';

class NoMatch extends Component {
    constructor(props) {
        super(props)
        console.log(this)
    }

    render() {
        return (
            <div>
                <h3>No match for <code>{this.props.location.pathname}</code></h3>
            </div>
        );
    }
}

export default NoMatch;