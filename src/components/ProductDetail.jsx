import React from 'react';
import { store } from './store';
import { Link } from 'react-router-dom';

const ProductDetail = (params) => {
  const item = store.find((item) => item.id * 1 === params.match.params.id * 1);

  if (!item) return <h2>Loading...</h2>;

  return (
    <div className="ui items">
      <div className="item">
        <div className="ui small image">
          <img src={item.imageUrl} alt={item.title} />
        </div>
        <div className="content">
          <div className="header">{item.title}</div>
          <div className="meta">
            <div className="price">{`$${item.price}`}</div>
            <div className="stay">{`Size: ${item.size}`}</div>
          </div>
          <Link to="/products" className="ui floated primary button">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
