import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hompage extends Component {
  render() {
    return (
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted header">Welcome to my shop!</h1>
          <h2>We only have 4 items here...</h2>
          <Link to="/products" className="ui huge primary button">
            Get Started <i className="right arrow icon"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Hompage;
