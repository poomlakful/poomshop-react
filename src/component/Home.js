import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props)
    console.log(this)
  }

  render() {
    let name = this.props.match.params.name ? this.props.match.params.name : 'poom'
    return (
      <h1>Hello, {name}</h1>
    );
  }
}

export default Home;