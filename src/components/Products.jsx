import React, { Component } from 'react';
import { store } from './store';
import { Link } from 'react-router-dom';

class Products extends Component {
  state = { data: [], displayedItem: {} };

  componentDidMount() {
    this.setState({ data: store });
  }

  render() {
    const menu = store.map((item) => (
      <Link to={`/products/${item.id}`} className="item" key={item.id}>
        {item.title}
      </Link>
    ));

    return <div className="ui secondary  menu">{menu}</div>;
  }
}

export default Products;
