import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import reducers from './reducers';
import SearchContainer from './containers/search/search-container';
import ProductResult from './containers/product/product-result';
import ProductDetails from './containers/product/product-details';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//Added Bootstrap just to give a little better UI look
//App is wrapped with Provider to create store with middleware
//to use axios requests to api

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div className="App">
          <Router>
            <Route
              render={({ location }) => (
                
                <TransitionGroup className="full-div" 
                appear={true}
                enter={true}
                >
                  <CSSTransition 
                    key={location.key} 
                    classNames="fade" 
                    timeout={300}
                    >
                    <Switch location={location}>
                      <Route path="/search/:search" component={ProductResult} />
                      <Route path="/product/:id" component={ProductDetails} />
                      <Route component={SearchContainer} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )} />
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
