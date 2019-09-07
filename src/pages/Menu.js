import React, {Component} from 'react';
import {
  Collapse, 
  Nav,
  Navbar,
  NavbarToggler,
  NavItem
} from "reactstrap";
import {NavLink} from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <div className="container">
          <NavLink to="/" className="navbar-brand">{this.props.name}</NavLink>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/home" className="nav-link">home</NavLink>
                <NavLink to="/mycomp" className="nav-link">MyComp</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}

export default Menu;
