import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import Menu from "./Menu";
import MyComp from "./MyComp";

export class Root extends Component {

  constructor(props) {
    super(props);
    this.website_name = "React World!";
    
  }  
  render() {
    return (
      <BrowserRouter>
        <>
          <Menu name={this.website_name} />
          <div className="container py-3" style={{backgroundColor: '#ffffff'}}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/home" component={Home}></Route>
              <Route
                path='/mycomp'
                render={(props) => <MyComp {...props} />}
              />
            </Switch>
          </div>
        </>
      </BrowserRouter>
    )
  }
}
