import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Hompage extends Component {
  render() {
    return (
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted header">
            Welcome to the worst product store!
          </h1>
          <div>
            <h3>
              The store includes a number of products from the "MOTAR AYIOM"
              (מוצר איום) website.
              <br />
              In the "Products" tab you can view all the products in stock.
              Clicking on any product will display the complete information, as
              well as its editing or deletion options.
              <br />
              In the "Add New Siege" tab, you can add products yourself.
            </h3>
          </div>

          <h2>
            There are currently {this.props.numOfProducts} products in stock!
          </h2>
          <Link to="/products" className="ui huge primary button">
            Get Started <i className="right arrow icon"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Hompage;
