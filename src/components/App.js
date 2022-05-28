import React, { Component } from 'react';
import Products from './Products';
import { BrowserRouter, Route } from 'react-router-dom';
import shopAPI from './axios';
import Header from './Header';
import Hompage from './Homepage';
import ProductDetail from './ProductDetail';
import Spinner from './spinner';
import Add from './add';

class App extends Component {
  state = {
    data: [],
    spinner: false,
    currentItem: {},
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    this.setState({ spinner: true });
    try {
      const fechedData = await shopAPI.get();
      this.setState({ data: fechedData.data, spinner: false });
    } catch (err) {
      console.warn(err);
    }
  }

  onNewAddedItem = () => {
    this.fetchData();
  };

  onItemSelect = (item) => {
    this.setState({ currentItem: item });
  };

  render() {
    const { data, currentItem } = { ...this.state };
    return (
      <div>
        <BrowserRouter>
          {this.state.spinner ? (
            <Spinner />
          ) : (
            <div className="ui container">
              <Header />
              <Route
                exact
                path="/"
                render={() => <Hompage numOfProducts={data.length} />}
              />
              <Route
                exact
                path="/products"
                render={() => (
                  <Products shop={data} passItemToApp={this.onItemSelect} />
                )}
              />

              <Route
                exact
                path="/products/:id"
                render={() => (
                  <ProductDetail
                    item={currentItem}
                    refetchData={this.onNewAddedItem}
                  />
                )}
              />
              <Route
                exact
                path="/add"
                render={() => <Add refetchData={this.onNewAddedItem} />}
              />
            </div>
          )}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
