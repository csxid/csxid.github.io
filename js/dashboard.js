
const Offcanvas = ReactBootstrap.Offcanvas;


const { Image, Form, Button , Container, Row, Col, Table, ToggleButton, ToggleButtonGroup, Card, Alert, Tab, Tabs} = ReactBootstrap;


const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;
const BrowserRouter = ReactRouterDOM.BrowserRouter;
const Router = ReactRouterDOM.HashRouter;
const Routes = ReactRouterDOM.Routes;
const Switch = ReactRouterDOM.Switch;

const useNavigate = ReactRouterDOM.useNavigate;
// const {Link, Route, BrowserRouter, Router, Routes, Switch} = ReactRouterDOM;




// function OffCanvasExample({ name, ...props }) {
//   const [show, setShow] = React.useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <div>
//       <Button variant="primary" onClick={handleShow} className="me-2">
//         {name}
//       </Button>
//       <Offcanvas show={show} onHide={handleClose} {...props}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           Some text as placeholder. In real life you can have the elements you
//           have chosen. Like, text, images, lists, etc.
//         </Offcanvas.Body>
//       </Offcanvas>
//     </div>
//   );
// }


function Aframe() {

  return (
    <div>
      <h1> Aframe </h1>
      Click here to enter the beamline argumented reality
      <a href="./aframe"> here </a>

<br/><br/>

      Click here to enter the beamline argumented reality without a marker
      <a href="./aframe/nomarker.html"> here </a>
    </div>
  );
}



function Dashboard() {
  const [energy, setEnergy] = React.useState(700);
  const [laa, setLaa] = React.useState(0);
  const [coherence, setCoherence] = React.useState(1);

  // const navigate = useNavigate();
  // const handleClick = () => navigate('/aframe');

    return (
      <div>
        {/* <ScanVisualization></ScanVisualization> */}
        {/* <ControlledTabs /> */}
        <h1> CSXID dashboard </h1>

 
        <Container>
        <Row>

        <Col lg={6}>

        <Card>
           <Link to="/periodicTable" style={{ textDecoration: 'inherit', color: 'inherit' }}>
            <Card.Body>
              <Card.Title>Energy and polarisation</Card.Title>
              <Card.Img variant="bottom" src="images/periodicTable.png" />
            </Card.Body>
            </Link>
        </Card>

{/* none */}
        <Card style={{ backgroundColor: '#6EBAA7' }} >
          <Link to="/aframe" style={{ textDecoration: 'inherit', color: 'inherit' }}>
          <Card.Body>
            <Container>
            <Row>
            <Col xs={6}> <Card.Title>Beamline tour</Card.Title> </Col>
            <Col xs={6}> <Image src="images/pgm.png" fluid/> </Col>
            </Row>
            </Container>
          </Card.Body>
          </Link>
        </Card>
          
         
        </Col>
        </Row>

        </Container>

        {/* 

          <Row className="py-2 gy-2 gx-2">
            <Col lg={3} xs={12}>
              <Card className="h-100" >
                <Card.Body>
                  3D imaging
                  2D imaging 
                  XAS
                  <div className="text-success text-center">
                  <h4>Energy {energy} </h4>
                  <Form.Range min={250} max={3500} value={energy} onChange={e => setEnergy(e.target.value)} />

                  Quality:
                  <Form.Range min={0} max={1} step={0.01} value={coherence} onChange={e => setCoherence(e.target.value)} />

                  Throughput:
                  Field of view

                  FRC contrast to noise vs resolution.
                  </div>
                </Card.Body>
              </Card>
  
            </Col>

          </Row>
         */}
      </div>
      );
}



function ControlledTabs() {
  const [key, setKey] = React.useState('tab1');

  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3"  >
      <Tab eventKey="tab1" title="tab 1">
         <QMIVisualisation></QMIVisualisation>
      </Tab>
      <Tab eventKey="tab2" title="tab 2">
        <LaminographyVisualisation></LaminographyVisualisation>
      </Tab>
     
    </Tabs>
  );
}