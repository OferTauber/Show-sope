import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = { attiveButton: 'home' };

  onBtnClick = (activeBtn) => {
    this.setState({ attiveButton: activeBtn });
  };

  render() {
    return (
      <div className="ui three item menu">
        <Link
          to="/"
          className={`${this.state.attiveButton === 'home' && 'active'} item`}
          onClick={() => this.onBtnClick('home')}
        >
          Home
        </Link>
        <Link
          to="/products"
          className={`${
            this.state.attiveButton === 'products' && 'active'
          } item`}
          onClick={() => this.onBtnClick('products')}
        >
          Products
        </Link>
      </div>
    );
  }
}

export default Header;
