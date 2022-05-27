import React, { Component } from 'react';
import Products from './Products';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Hompage from './Homepage';
import ProductDetail from './ProductDetail';
import shopAPI from './axios';

class App extends Component {
  state = {
    data: [],
    spinner: false,
  };

  async componentDidMount() {
    this.setState({ spinner: true });
    try {
      const fechedData = await shopAPI.get();
      this.setState({ data: fechedData.data, spinner: false });
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    const { data } = { ...this.state };
    return (
      <div>
        <BrowserRouter>
          {this.state.spinner ? (
            <Spinner />
          ) : (
            <div>
              <Header />
              <Route exact path="/" component={Hompage} />
              <Route exact path="/products" component={Products} />
              <Route
                exact
                path="/products"
                render={() => {
                  <Products list={data} />;
                }}
              />
              <Route path="/products/:id" exact component={ProductDetail} />
            </div>
          )}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

const Spinner = () => {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui text loader">Loading</div>
    </div>
  );
};
