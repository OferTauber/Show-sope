import React from 'react';

import { Link } from 'react-router-dom';

const ProductDetail = ({ item }) => {
  if (!item) return <h2>Loading...</h2>;

  return (
    <div className="container ui">
      <img
        className="ui fluid image"
        style={{ maxWidth: '500px' }}
        src={item.img}
        alt={item.desc}
      />
      <div className="ui horizontal segments">
        <div className="ui segment">
          <h3>{item.name}</h3>
        </div>
        <div className="ui segment">
          <h4>${item.price}</h4>
        </div>
      </div>
      <div className="ui segment">
        <p>{item.desc}</p>
      </div>

      <div className="ui green horizontal label">{item.adjective1}</div>
      <div className="ui yellow horizontal label">{item.adjective2}</div>
      <div className="ui blue horizontal label">{item.adjective3}</div>

      <div className="ui divided selection list">
        <a className="item">Material: {item.material}</a>
        <a className="item">Manufacturer: {item.manufacturer}</a>
      </div>
      <Link to="/products" className="ui floated primary button">
        Back
      </Link>
    </div>
  );
};

export default ProductDetail;
