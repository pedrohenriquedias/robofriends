import React, { Component } from 'react';

class Planet extends Component {
  render(){
    return (
      <div className="w5 h5 ma1 bg-green br-100">
        <div className="tc v-mid">{this.props.planetName}</div>
      </div>
    );
  }
}

export default Planet