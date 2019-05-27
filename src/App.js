import React, { Component } from 'react';
// import './App.css';
import  { Route } from 'react-router';
import { BrowserRouter,Switch } from 'react-router-dom';
import { createBrowserHistory} from 'history';
import { MainPage, AboutUs } from './pages';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter history={createBrowserHistory()} >
          <Switch>
            <Route path="/" exact component={ MainPage } />
            <Route path="/AboutUs" exact component={ AboutUs } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
