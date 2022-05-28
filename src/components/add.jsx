import React, { Component } from 'react';
import shopAPI from './axios';

// import { Link } from 'react-router-dom';

class Add extends Component {
  state = {
    form: {
      name: '',
      desc: '',
      material: '',
      adjective1: '',
      adjective2: '',
      adjective3: '',
      price: '',
      manufacturer: '',
      img: '',
    },
    spinner: false,
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
    this.setState({ spinner: true });
    try {
      const res = await shopAPI.post(this.state.form);
      this.setState({
        form: {
          name: '',
          desc: '',
          material: '',
          adjective1: '',
          adjective2: '',
          adjective3: '',
          price: '',
          manufacturer: '',
          img: '',
        },
        spinner: false,
      });
      void res;
      this.props.refetchData();
    } catch (err) {
      console.warn(err);
    }
  };

  onInputChange = (e) => {
    const temp = this.state.form;
    temp[e.target.dataset.field] = e.target.value;

    this.setState({ form: temp });
  };

  render() {
    const {
      name,
      desc,
      material,
      adjective1,
      adjective2,
      adjective3,
      price,
      manufacturer,
      img,
    } = { ...this.state.form };
    return (
      <div className="container">
        <h2>Add new item details</h2>
        <form
          className={`ui ${this.state.spinner && 'loading'} form`}
          // className={`ui loading form`}
          onSubmit={(e) => this.onFormSubmit(e)}
        >
          <div className="fields">
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                value={name}
                required
                data-field="name"
                onChange={(e) => this.onInputChange(e)}
              />
            </div>
            <div className="field">
              <label>Price</label>
              <input
                type="number"
                value={price}
                required
                data-field="price"
                onChange={(e) => this.onInputChange(e)}
              />
            </div>
          </div>
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              value={desc}
              required
              data-field="desc"
              onChange={(e) => this.onInputChange(e)}
            />
          </div>
          <div className="fields">
            <div className="field">
              <label>Manufacturer</label>
              <input
                type="text"
                value={manufacturer}
                required
                data-field="manufacturer"
                onChange={(e) => this.onInputChange(e)}
              />
            </div>
            <div className="field">
              <label>Material</label>
              <input
                type="text"
                value={material}
                required
                data-field="material"
                onChange={(e) => this.onInputChange(e)}
              />
            </div>
            <div className="field">
              <label>Img</label>
              <input
                type="url"
                value={img}
                required
                data-field="img"
                onChange={(e) => this.onInputChange(e)}
              />
            </div>
          </div>
          <div className="fields">
            <div className="field">
              <label>Adjective1</label>
              <input
                type="text"
                value={adjective1}
                required
                data-field="adjective1"
                onChange={(e) => this.onInputChange(e)}
              />
            </div>
            <div className="field">
              <label>Adjective2</label>
              <input
                type="text"
                value={adjective2}
                required
                data-field="adjective2"
                onChange={(e) => this.onInputChange(e)}
              />
            </div>
            <div className="field">
              <label>Adjective3</label>
              <input
                type="text"
                value={adjective3}
                required
                data-field="adjective3"
                onChange={(e) => this.onInputChange(e)}
              />
            </div>
          </div>
          <button className="ui submit button">Add Item</button>
        </form>
      </div>
    );
  }
}

export default Add;
