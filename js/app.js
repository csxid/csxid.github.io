const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Router = ReactRouterDOM.HashRouter;
const Routes = ReactRouterDOM.Routes;
const Switch = ReactRouterDOM.Switch;

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
          <i className="fa-2xl fas fa-chevron-circle-left"></i>

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
        <Nav.Link eventKey="4" as={Link} to="/tour">Tour</Nav.Link>
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
                <Navigation />

                <Container fluid> 
                <div style={{ flex: 1, overflow: 'auto', background: 'white' }}>
                  <Switch>
                    <Route exact path="/">              <Dashboard />         </Route>
                    <Route exact path="/periodicTable"> <PeriodicTablePage /> </Route>
                    <Route exact path="/magneticField"> <MagneticFieldPage /> </Route>
                    <Route exact path="/ar"> <AR /> </Route>
                    <Route exact path="/tour"> <Tour /> </Route>
                    <Route exact path="/pixels"> <Pixels/> </Route>
                  </Switch>
                </div>
              </Container>
            </Router>
      );
    }
  }

const root = ReactDOM.createRoot( document.getElementById('root') );
root.render(<App />);
