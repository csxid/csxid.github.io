const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Router = ReactRouterDOM.HashRouter;
const Routes = ReactRouterDOM.Routes;
const Switch = ReactRouterDOM.Switch;

const Nav = ReactBootstrap.Nav;
const Navbar = ReactBootstrap.Navbar;
const NavDropdown = ReactBootstrap.NavDropdown;

const { Form, Button , Container, Row, Col, Table, ToggleButton, ToggleButtonGroup, Card, Alert} = ReactBootstrap;



// import { MagneticFieldPage } from './js/magneticField.js';
// import { ThreeRenderer } from './js/magneticFieldWedgeVisualisation.js';
// import MyComponent from './src/MyComponent.js'; // Importing MyComponent from another file




function Navigation() {
  return ( 
  <Navbar bg="light" expand="md">
  <Container fluid>

    {/* <MyComponent></MyComponent> */}

    <Nav.Link as={Link} to="/"><Navbar.Brand >
    <Switch>
      <Route exact path="/"> Home </Route>
      <Route> <span className="d-none d-md-inline">Nav</span> <i className="d-md-none  fa-solid fa-xl fa-chevron-left"></i> </Route>
    </Switch>
    </Navbar.Brand></Nav.Link>
    
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      {/* <Nav.Link as={Link} to="/energy">Energy</Nav.Link> */}
      <Nav.Link as={Link} to="/periodicTable">Energy & Polarisation</Nav.Link>
      <Nav.Link as={Link} to="/magneticField">Magnetic Field</Nav.Link>

      </Nav>
    </Navbar.Collapse>

  </Container>
  </Navbar>
);
}



class App extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { liked: false };
    }

    render() {
      return (
            <Router>
              <Navigation />
              <Container fluid>
                <Switch>
                  <Route exact path="/"> <Dashboard /> </Route>
                  <Route exact path="/periodicTable"> <PeriodicTablePage /> </Route>
                  <Route exact path="/magneticField"> <MagneticFieldPage /> </Route>
                </Switch>
              </Container>
            </Router>
      );
    }
  }

const root = ReactDOM.createRoot( document.getElementById('root') );
root.render(<App />);
