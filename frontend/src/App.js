import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainScreen from './Screens/MainScreen';
import ProductScreen from './Screens/ProductScreen';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <BrowserRouter>
    <div>
  <Navbar light expand="md" className="navTag">
        <NavbarBrand href="/">TERATIK</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="pl-5" navbar>
            <NavItem className="navItemTag">
              <Link className="linkHome" to="/"><NavLink href="">Home</NavLink></Link>
            </NavItem>
            <NavItem className="navItemTag">
              <NavLink href="">Catalogue</NavLink>
            </NavItem>
            <NavItem className="navItemTag">
              <NavLink href="" >About Us</NavLink>
            </NavItem>
            <NavItem className="navItemTag">
              <NavLink href="" >Help</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      
    <Route path="/product/:id" component={ProductScreen}/>
    <Route path="/" exact={true} component={MainScreen}/>
    <div className="footer">
      <div className="container-fluid">
      <div className="row">
              <div className="col-5">
                  <p className="text-white">Find Us At!</p>
              </div>
              <div className="col-5">
                  <p>Contact Us</p>
              </div>
            </div>
      </div>
      
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
