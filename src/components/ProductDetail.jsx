import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Edit from './edit';
import shopAPI from './axios';

class ProductDetail extends Component {
  state = { editMode: false };

  toogleEditMode = () => {
    const temp = this.state.editMode;

    this.setState({ editMode: !temp });
  };

  deleteItem = async (item) => {
    try {
      await shopAPI.delete(item);
      this.props.refetchData();
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    const { item, refetchData } = { ...this.props };

    if (!item) return <h2>Loading...</h2>;

    if (this.state.editMode)
      return (
        <Edit
          refetchData={refetchData}
          item={item}
          cancel={this.toogleEditMode}
        />
      );

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
        <button
          className="ui floated yellow button"
          onClick={this.toogleEditMode}
        >
          Edit
        </button>

        <Link
          to="/products"
          className="ui floated red button"
          onClick={() => this.deleteItem(item)}
        >
          Delete
        </Link>
      </div>
    );
  }
}

export default ProductDetail;

// this.context.router.transitionTo(`route/${this.storeInput.value}`)
