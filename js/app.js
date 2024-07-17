const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Router = ReactRouterDOM.HashRouter;
const Routes = ReactRouterDOM.Routes;
const Switch = ReactRouterDOM.Switch;

// const Nav = ReactBootstrap.Nav;
// const Navbar = ReactBootstrap.Navbar;
// const NavDropdown = ReactBootstrap.NavDropdown;

const {Nav, Navbar, NavDropdown, Form, Button , Container, Row, Col, Table, ToggleButton, ToggleButtonGroup, Card, Alert} = ReactBootstrap;

// const {Link, Route, BrowserRouter, Router, Routes, Switch} = ReactRouterDOM;



// import { MagneticFieldPage } from './js/magneticField.js';
// import { ThreeRenderer } from './js/magneticFieldWedgeVisualisation.js';
// import MyComponent from './src/MyComponent.js'; // Importing MyComponent from another file


function Navigation() {
  return ( 
  <Navbar bg="light" expand="md" collapseOnSelect>

    <Nav.Link as={Link} to="/">
      <Navbar.Brand > 
      <Switch>
          <Route exact path="/">              Home         </Route>
          <Route path="*"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
            </svg>
          </Route>
       </Switch>
       </Navbar.Brand>
    </Nav.Link>


    <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll"/>
    <Navbar.Collapse id="navbarScroll">
      <Nav>
        <Nav.Link eventKey="1" as={Link} to="/periodicTable">Energy & Polarisation</Nav.Link>
        <Nav.Link eventKey="2" as={Link} to="/magneticField">Magnetic Field</Nav.Link>
        <Nav.Link eventKey="3" as={Link} to="/ar">AR</Nav.Link>
        <Nav.Link eventKey="4" as={Link} to="/aframe">Aframe</Nav.Link>
        <Nav.Link eventKey="5" as={Link} to="/pixels">Pixels</Nav.Link>
      </Nav>
    </Navbar.Collapse>

  </Navbar>
);
}



class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
            <Router>
              <Container fluid>
              <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <Navigation />

                <div style={{ flex: 1, overflow: 'auto', background: 'white' }}>
                  <Switch>
                    <Route exact path="/">              <Dashboard />         </Route>
                    <Route exact path="/periodicTable"> <PeriodicTablePage /> </Route>
                    <Route exact path="/magneticField"> <MagneticFieldPage /> </Route>
                    <Route exact path="/ar"> <AR /> </Route>
                    <Route exact path="/aframe"> <Aframe /> </Route>
                    <Route exact path="/pixels"> <Pixels/> </Route>
                  </Switch>
                </div>
              </div>
              </Container>
            </Router>
      );
    }
  }

const root = ReactDOM.createRoot( document.getElementById('root') );
root.render(<App />);
