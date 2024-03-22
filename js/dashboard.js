const Alert = ReactBootstrap.Alert;

const Container = ReactBootstrap.Container;
const Row = ReactBootstrap.Row;
const Col = ReactBootstrap.Col;

const Button = ReactBootstrap.Button;
const Card = ReactBootstrap.Card;


const Form = ReactBootstrap.Form;

const Offcanvas = ReactBootstrap.Offcanvas;



function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}




function Dashboard() {
  const [energy, setEnergy] = React.useState(700);
  const [laa, setLaa] = React.useState(0);
  const [coherence, setCoherence] = React.useState(1);

    return (
      <div>
        <h1>CSXID visualisations</h1>


        {/* <ScanVisualization></ScanVisualization> */}


        <QMIVisualisation></QMIVisualisation>


        <LaminographyVisualisation></LaminographyVisualisation>


        {/* <Card >
          <Card.Body>
            2D imaging 
            XAS
          </Card.Body>
        </Card>

        <Card >
          <Card.Body>
            2D imaging 
            XAS
          </Card.Body>
        </Card>


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



