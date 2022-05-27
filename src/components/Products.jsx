import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Products extends Component {
  onItemClick = (item) => {
    this.props.passItemToApp(item);
  };

  generateLinkes(productsList) {
    return productsList.map((item) => {
      return (
        <Link
          className="card"
          to={`/products/${item.id}`}
          key={item.id}
          item={item}
          onClick={() => {
            this.onItemClick(item);
          }}
        >
          <div className="image">
            <img src={item.img} alt={item.desc} />
          </div>
          <div className="content">
            <div className="header">{item.name}</div>
            <div className="meta"></div>
          </div>
          <div className="extra content">
            <span className="right floated">
              <i className="dollar icon"></i>
              {item.price}
            </span>
            <span>{`By ${item.manufacturer}`}</span>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <div className="ui link cards">
        {this.generateLinkes(this.props.shop)}
      </div>
    );
  }
}

export default Products;
