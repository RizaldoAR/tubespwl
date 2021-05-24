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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faMapMarkedAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faAmazon, faWhatsapp, faLine } from '@fortawesome/free-brands-svg-icons';
import MainScreen from './Screens/MainScreen';
import ProductScreen from './Screens/ProductScreen';
import CatalogueScreen from './Screens/CatalogueScreen';
import AboutScreen from './Screens/AboutScreen';
import HelpScreen from './Screens/HelpScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import Admin from './Screens/Admin';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <BrowserRouter>
    <div>
  <Navbar light expand="md" className="navTag">
        <NavbarBrand href="/"><img className="logo img-fluid" src="/assets/images/teratics.jpeg"></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="pl-5" navbar>
            <NavItem className="navItemTag">
              <Link className="linkHome" to="/"><NavLink href="">Home</NavLink></Link>
            </NavItem>
            <NavItem className="navItemTag">
            <Link className="linkHome" to="/catalogue"><NavLink href="">Catalogue</NavLink></Link>
            </NavItem>
            <NavItem className="navItemTag">
            <Link className="linkHome" to="/about"><NavLink href="">About Us</NavLink></Link>
            </NavItem>
            <NavItem className="navItemTag">
            <Link className="linkHome" to="/help"><NavLink href="">Help</NavLink></Link>
            </NavItem>
          </Nav>
        </Collapse>
        <NavbarText className="navbarTextTag"><Link className="loginButton" to="/login">Login <FontAwesomeIcon icon={faSignInAlt}/></Link></NavbarText>
      </Navbar>

    <Route path="/register" component={RegisterScreen}/>
    <Route path="/admin" component={Admin}/>
    <Route path="/login" component={LoginScreen}/>
    <Route path="/help" component={HelpScreen}/>
    <Route path="/about" component={AboutScreen}/>
    <Route path="/catalogue" component={CatalogueScreen}/>  
    <Route path="/product/:id" component={ProductScreen}/>
    <Route path="/" exact={true} component={MainScreen}/>
    <div className="footer">
      <div className="container-fluid">
      <div className="row pt-3 pb-5">
              <div className="col-6">
                  <h5 className="headerFooter mb-3">Find Us At!</h5>
                  <div className="col-10 offset-1">
                    <label className="col-10 offset-1"><FontAwesomeIcon icon={faInstagram}/> teratics.tech</label><br></br>
                  </div>
                  <div className="col-10 offset-1">
                    <label className="col-10 offset-1"><FontAwesomeIcon icon={faAmazon}/> Teratics Store</label>
                  </div>
                  <div className="col-10 offset-1">
                    <label className="col-10 offset-1"><FontAwesomeIcon icon={faMapMarkedAlt}/> Way Huwi, Jati Agung, South Lampung, Lampung</label>
                  </div>
              </div>
              <div className="col-6">
                  <h5 className="headerFooter mb-3">Contact Us</h5>
                  <div className="col-10 offset-1">
                    <label className="col-10 offset-1"><FontAwesomeIcon icon={faPhoneSquareAlt}/> +62-895-0392-4256 (Yafi)</label><br></br>
                  </div>
                  <div className="col-10 offset-1">
                    <label className="col-10 offset-1"><FontAwesomeIcon icon={faWhatsapp}/> +62-812-74027237 (Rizaldo)</label>
                  </div>
                  <div className="col-10 offset-1">
                    <label className="col-10 offset-1"><FontAwesomeIcon icon={faLine}/> +62-821-6742-3559 (Robby)</label>
                  </div>
              </div>
            </div>
      </div>
      
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
