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

    <Nav.Link as={Link} to="/">
      <Navbar.Brand > Home  </Navbar.Brand>
    </Nav.Link>

    <Navbar.Toggle />
    
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link as={Link} to="/periodicTable">Energy & Polarisation</Nav.Link>
        <Nav.Link as={Link} to="/magneticField">Magnetic Field</Nav.Link>
        <Nav.Link as={Link} to="/ar">AR</Nav.Link>
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
                <Navigation />
                <Switch>
                  <Route exact path="/">              <Dashboard />         </Route>
                  <Route exact path="/periodicTable"> <PeriodicTablePage /> </Route>
                  <Route exact path="/magneticField"> <MagneticFieldPage /> </Route>
                  <Route exact path="/ar"> <AR /> </Route>
                </Switch>
              </Container>
            </Router>
      );
    }
  }

const root = ReactDOM.createRoot( document.getElementById('root') );
root.render(<App />);
