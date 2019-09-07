import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import Menu from "./Menu";
import MyComp from "./MyComp";

export class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Menu/>
          <div className="container py-3" style={{backgroundColor: '#ffffff'}}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/home" component={Home}></Route>
              <Route exact path="/mycomp" component={MyComp}></Route>
            </Switch>
          </div>
        </>
      </BrowserRouter>
    )
  }
}
