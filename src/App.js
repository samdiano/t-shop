import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import HeaderTop from "./components/Header/HeaderTop";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ViewProduct from "./components/ViewProduct/ViewProduct";
import store from "./store";
import Subscribe from "./components/Subscribe/Subscribe";
import Alert from "./components/Alert/Alert";
import Checkout from "./components/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <HeaderTop />
            <Header />
            <Alert />
            <div className="wrapper">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/products/:productId"
                  component={ViewProduct}
                />
                <Route exact path="/checkout" component={Checkout} />
                <Route component={Home} />
              </Switch>
            </div>
            <Subscribe />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
