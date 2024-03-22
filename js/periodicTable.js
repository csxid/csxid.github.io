// const Alert = ReactBootstrap.Alert;

// const Container = ReactBootstrap.Container;
// const Row = ReactBootstrap.Row;
// const Col = ReactBootstrap.Col;

// const Button = ReactBootstrap.Button;
// const Card = ReactBootstrap.Card;

// const ToggleButton = ReactBootstrap.ToggleButton;
// const ToggleButtonGroup = ReactBootstrap.ToggleButtonGroup;

// const Form = ReactBootstrap.Form;
// const Table = ReactBootstrap.Table;


const { Form, Button , Container, Row, Col, Table, ToggleButton, ToggleButtonGroup, Card, Alert} = ReactBootstrap;

const maxEnergy = 2000;
const minEnergy = 250


function PeriodicTablePage() {
  const [selectedElement, setSelectedElement] = React.useState(" ");

  return(
    <div>
      <PeriodicTable selectedElement={selectedElement} setSelectedElement={setSelectedElement}/>
      {/* <br></br>
      <Filters /> */}
      <br></br>
      <EdgeInfo element={selectedElement}/>
    </div>
  );
}





function Filters() {
  const [value, setValue] = React.useState(["K", "L2","L3"]);

  const handleChange = (val) => setValue(val);

  return (
    <div>
      {/* <ToggleButton id="tbg-btn-1" value={"K"}> K </ToggleButton> */}


    <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton id="tbg-btn-1" variant="outline-primary" value={"K"}> K </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton id="tbg-btn-2" variant="outline-primary" value={"L1"}> L1 </ToggleButton>
      <ToggleButton id="tbg-btn-3" variant="outline-primary" value={"L2"}> L2 </ToggleButton>
      <ToggleButton id="tbg-btn-4" variant="outline-primary" value={"L3"}> L3 </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );

  
}



function PeriodicTable({selectedElement, setSelectedElement}) {
  const handleClick = (symbol) => {
    setSelectedElement(symbol);
  };
  
    return (
      <div>
          <link rel="stylesheet" href="./periodicTable.css" type="text/css"/>

          <div className="grid-container">
            {elements.map((element, index) => {
              var classInfo = "element element-"+element.z
              classInfo += element.availability == "fullK" ? ' availabilityKFull' : ''
              classInfo += element.availability == "fullL" ? ' availabilityLFull' : ''
              classInfo += element.availability == "fullM" ? ' availabilityMFull' : ''

              classInfo += element.availability == "partialK" ? ' availabilityPartialK' : ''
              classInfo += element.availability == "partialL" ? ' availabilityPartialL' : ''
              classInfo += element.availability == "partialM" ? ' availabilityPartialM' : ''
              classInfo += selectedElement == element.symbol ? ' selectedElement' : ''

              return (
                <div className={classInfo} key={element.z} onClick={() => handleClick(element.symbol)}  >{element.symbol}</div>
              )
            })}
          </div>
      </div>
      );
  
}






function EdgeInfo( {element} ) {
  const kEdges = edges.filter(item => (item.element==element) && (item.edge.startsWith('K')));
  const lEdges = edges.filter(item => (item.element==element) && (item.edge.startsWith('L')));
  const mEdges = edges.filter(item => (item.element==element) && (item.edge.startsWith('M')));

  return (
    <Container>
      <Row>
        {kEdges.length >0 ?  <Col md={4} xs={12}><EdgeTable selectedEdges={kEdges} /></Col>    : null   }
        {lEdges.length >0 ?  <Col md={4} xs={12}><EdgeTable selectedEdges={lEdges} /></Col>    : null   }
        {mEdges.length >0 ?  <Col md={4} xs={12}><EdgeTable selectedEdges={mEdges} /></Col>    : null   }
      </Row>
    </Container>
  );
}

function EdgeTable( {selectedEdges} ) {
  const minEnergyCP = 380;
  const minEnergyLH = 250;
  const minEnergyLV = 500;
  const maxEnergyCP = 2000;
  const maxEnergyLH = 2000;
  const maxEnergyLV = 2000;


    return (
      <div>
        <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th style={{width: "33%"}}>Edge</th>
                  <th style={{width: "33%"}}>Energy</th>
                  <th style={{width: "33%"}}>Availability</th>
                </tr> 
              </thead>

              <tbody>
                  {selectedEdges.map((edge, index) => {

                    var availability = "";
                    availability    += ((edge.energy >= minEnergyCP) & (edge.energy <= maxEnergyCP)) ? "CP " : "" 
                    availability    += ((edge.energy >= minEnergyLH) & (edge.energy <= maxEnergyLH)) ? "LH " : "" 
                    availability    += ((edge.energy >= minEnergyLV) & (edge.energy <= maxEnergyLV)) ? "LV " : "" 

                    return (
                      <tr key={index} >
                        <td> {edge.element} {edge.edge} </td>
                        <td> {edge.energy} eV </td>
                        <td>     {availability} </td>
                      </tr>
                    )
                  })}
              </tbody>
        </Table>
      </div>
      );
}

