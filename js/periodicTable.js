const { Form, Button , Container, Row, Col, Table, ToggleButton, ToggleButtonGroup, Card, Alert} = ReactBootstrap;

function PeriodicTablePage() {
  const [selectedElement, setSelectedElement] = React.useState(" ");
  const [energy, setEnergy] =  React.useState({'minEnergyLH': 250, 'maxEnergyLH':2000, 'minEnergyLV': 365, 'maxEnergyLV':2000, 'minEnergyCP': 276, 'maxEnergyCP':2000});

  return(
    <div>
      {/* <Form.Range min={0} max={500} value={energy.minEnergyLH} onChange={(e) => {setEnergy(prev => ({...prev, 'minEnergyLH':e.target.value}))}}/> */}
      {/* <Form.Control value={energy.minEnergyLH} /> */}
      {/* <Form.Range min={0} max={500} value={energy.minEnergyLV} onChange={(e) => {setEnergy(prev => ({...prev, 'minEnergyLV':e.target.value}))}}/> */}
      {/* <Form.Control value={energy.minEnergyLV} /> */}
      {/* <Form.Range min={0} max={500} value={minEnergyCP} onChange={(e) => {setMinEnergyCP(e.target.value)}}/> */}
      {/* <Form.Control value={energy.minEnergyCP} /> */}

      <PeriodicTable selectedElement={selectedElement} setSelectedElement={setSelectedElement} energy={energy} />
      <br></br>
      <Filters setEnergy={setEnergy}/>
      <br></br>
      <EdgeInfo energy={energy} element={selectedElement}/>
    </div>
  );
}




function PeriodicTable({selectedElement, setSelectedElement, energy}) {
  const handleClick = (symbol) => {
    setSelectedElement(symbol);
  };
  
    return (
      <div>
          <link rel="stylesheet" href="./periodicTable.css" type="text/css"/>

          <div className="grid-container">
            {elements.map((element, index) => {
              var classInfo = "element element-"+element.z

              const elementEdges = edges.filter(item => (item.element==element.symbol) );
              if (elementEdges.length > 0){

                const kEdges = elementEdges.filter(item => (item.edge == "K") );
                if ( (kEdges[0].energy >= energy.minEnergyLH) & (kEdges[0].energy <= energy.maxEnergyLH)
                  & (kEdges[0].energy >= energy.minEnergyLV) & (kEdges[0].energy <= energy.maxEnergyLV)
                  & (kEdges[0].energy >= energy.minEnergyCP) & (kEdges[0].energy <= energy.maxEnergyCP) ){
                  classInfo +=  ' availabilityKFull';
                } else if ( (kEdges[0].energy >= energy.minEnergyLH) & (kEdges[0].energy <= energy.maxEnergyLH)
                  | (kEdges[0].energy >= energy.minEnergyLV) & (kEdges[0].energy <= energy.maxEnergyLV)
                  | (kEdges[0].energy >= energy.minEnergyCP) & (kEdges[0].energy <= energy.maxEnergyCP) ){
                  classInfo +=  ' availabilityKPartial';
                }
              }


                
              var fullFlag = true;
              var partialFlag = false;
              var edge = elementEdges.filter(item => (item.edge == ("L2")) )[0];
              if (!!edge){
                if ( (edge.energy >= energy.minEnergyLH) & (edge.energy <= energy.maxEnergyLH) ) { partialFlag = true; } else { fullFlag = false; }
                if ( (edge.energy >= energy.minEnergyLV) & (edge.energy <= energy.maxEnergyLV) ) { partialFlag = true; } else { fullFlag = false; }
                if ( (edge.energy >= energy.minEnergyCP) & (edge.energy <= energy.maxEnergyCP) ) { partialFlag = true; } else { fullFlag = false; }
              }
              var edge = elementEdges.filter(item => (item.edge == ("L3")) )[0];
              if (!!edge){
                if ( (edge.energy >= energy.minEnergyLH) & (edge.energy <= energy.maxEnergyLH) ) { partialFlag = true; } else { fullFlag = false; }
                if ( (edge.energy >= energy.minEnergyLV) & (edge.energy <= energy.maxEnergyLV) ) { partialFlag = true; } else { fullFlag = false; }
                if ( (edge.energy >= energy.minEnergyCP) & (edge.energy <= energy.maxEnergyCP) ) { partialFlag = true; } else { fullFlag = false; }
              
                if (fullFlag == true) {
                  classInfo +=  ' availabilityLFull';
                } else if (partialFlag == true) {
                  classInfo +=  ' availabilityLPartial';
                }
              }


              var fullFlag = true;
              var partialFlag = false;
              var edge = elementEdges.filter(item => (item.edge == ("M2")) )[0];
              if (!!edge){
                if ( (edge.energy >= energy.minEnergyLH) & (edge.energy <= energy.maxEnergyLH) ) { partialFlag = true; } else { fullFlag = false; }
                if ( (edge.energy >= energy.minEnergyLV) & (edge.energy <= energy.maxEnergyLV) ) { partialFlag = true; } else { fullFlag = false; }
                if ( (edge.energy >= energy.minEnergyCP) & (edge.energy <= energy.maxEnergyCP) ) { partialFlag = true; } else { fullFlag = false; }
              }
              var edge = elementEdges.filter(item => (item.edge == ("M3")) )[0];
              if (!!edge){
                if ( (edge.energy >= energy.minEnergyLH) & (edge.energy <= energy.maxEnergyLH) ) { partialFlag = true; } else { fullFlag = false; }
                if ( (edge.energy >= energy.minEnergyLV) & (edge.energy <= energy.maxEnergyLV) ) { partialFlag = true; } else { fullFlag = false; }
                if ( (edge.energy >= energy.minEnergyCP) & (edge.energy <= energy.maxEnergyCP) ) { partialFlag = true; } else { fullFlag = false; }
              }
              var edge = elementEdges.filter(item => (item.edge == ("M4")) )[0];
              if (!!edge){
                if ( (edge.energy >= energy.minEnergyLH) & (edge.energy <= energy.maxEnergyLH) ) { partialFlag = true; } else { fullFlag = false; }
                if ( (edge.energy >= energy.minEnergyLV) & (edge.energy <= energy.maxEnergyLV) ) { partialFlag = true; } else { fullFlag = false; }
                if ( (edge.energy >= energy.minEnergyCP) & (edge.energy <= energy.maxEnergyCP) ) { partialFlag = true; } else { fullFlag = false; }
              }
              var edge = elementEdges.filter(item => (item.edge == ("M5")) )[0];
              if (!!edge){
                if ( (edge.energy >= energy.minEnergyLH) & (edge.energy <= energy.maxEnergyLH) ) { partialFlag = true; } else { fullFlag = false; }
                if ( (edge.energy >= energy.minEnergyLV) & (edge.energy <= energy.maxEnergyLV) ) { partialFlag = true; } else { fullFlag = false; }
                if ( (edge.energy >= energy.minEnergyCP) & (edge.energy <= energy.maxEnergyCP) ) { partialFlag = true; } else { fullFlag = false; }
              
                if (fullFlag == true) {
                  classInfo +=  ' availabilityMFull';
                } else if (partialFlag == true) {
                  classInfo +=  ' availabilityMPartial';
                }
              }

    
              classInfo += selectedElement == element.symbol ? ' selectedElement' : ''

              return (
                <div className={classInfo} key={element.z} onClick={() => handleClick(element.symbol)}  >{element.symbol}</div>
              )
            })}
          </div>
      </div>
      );
  
}



function Filters({setEnergy}) {
  // const [value, setValue] = React.useState(1);
  // const [option, setOptions] = React.useState(1);


  const day1 = () => {
    setEnergy({'minEnergyLH': 250, 'maxEnergyLH':2000, 'minEnergyLV': 365, 'maxEnergyLV':2000, 'minEnergyCP': 276, 'maxEnergyCP':2000});
  };
  const risk = () => {
    setEnergy({'minEnergyLH': 250, 'maxEnergyLH':2000, 'minEnergyLV': 500, 'maxEnergyLV':2000, 'minEnergyCP': 380, 'maxEnergyCP':2000});
  };
  const upgrade = () => {
    setEnergy({'minEnergyLH': 250, 'maxEnergyLH':3500, 'minEnergyLV': 365, 'maxEnergyLV':3500, 'minEnergyCP': 276, 'maxEnergyCP':2150});
  };
  const upgradeRisk = () => {
    setEnergy({'minEnergyLH': 250, 'maxEnergyLH':3500, 'minEnergyLV': 500, 'maxEnergyLV':3500, 'minEnergyCP': 380, 'maxEnergyCP':2150});
  };

  

  // const handleChange = function(e){
  //   console.log("handle change");
  //   // setValue(val);
  //   console.log(e.target);
  // }

  return (
    <div>

    <Button variant="outline-primary" onClick={day1}> Day 1 </Button>
    <Button variant="outline-primary" onClick={risk}> Risk </Button>
    <Button variant="outline-primary" onClick={upgrade}> Upgrade </Button>
    <Button variant="outline-primary" onClick={upgradeRisk}> Upgrade Risk </Button>

    {/* <ToggleButtonGroup type="radio" value={value} onChange={handleChange}>
          <ToggleButton variant="outline-primary" value={1}> Day 1 </ToggleButton>
          <ToggleButton variant="outline-primary" value={2}> Day 1 (risk) </ToggleButton>
          <ToggleButton variant="outline-primary" value={3}> Upgrade </ToggleButton>
          <ToggleButton variant="outline-primary" value={4}> Upgrade (risk) </ToggleButton>
    </ToggleButtonGroup> */}

{/* <ToggleButtonGroup type="radio" name="options" value={option} onClick={handleChange}>
      <ToggleButton variant="outline-primary" value={1}>Radio 1 (pre-checked)</ToggleButton>
      <ToggleButton variant="outline-primary" value={2}>Radio 2</ToggleButton>
      <ToggleButton variant="outline-primary" value={3}>Radio 3</ToggleButton>
    </ToggleButtonGroup> */}



      {/* <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
      <ToggleButton id="tbg-btn-1" variant="outline-primary" value={"K"}> K </ToggleButton>

      <ToggleButton id="tbg-btn-2" variant="outline-primary" value={"L1"}> L1 </ToggleButton>
      <ToggleButton id="tbg-btn-3" variant="outline-primary" value={"L2L3"}> L2/L3 </ToggleButton>

      <ToggleButton id="tbg-btn-4" variant="outline-primary" value={"M1"}> M1 </ToggleButton>
      <ToggleButton id="tbg-btn-5" variant="outline-primary" value={"M2M3"}> M2/M3 </ToggleButton>
      <ToggleButton id="tbg-btn-6" variant="outline-primary" value={"MM4M5"}> M4/M5 </ToggleButton>
    </ToggleButtonGroup> */}



    </div>
  );

  
}



function EdgeInfo( {energy, element} ) {
  const kEdges = edges.filter(item => (item.element==element) && (item.edge.startsWith('K')));
  const lEdges = edges.filter(item => (item.element==element) && (item.edge.startsWith('L')));
  const mEdges = edges.filter(item => (item.element==element) && (item.edge.startsWith('M')));

  return (
    <Container>
      <Row>
        {kEdges.length >0 ?  <Col md={4} xs={12}><EdgeTable energy={energy} selectedEdges={kEdges} /></Col>    : null   }
        {lEdges.length >0 ?  <Col md={4} xs={12}><EdgeTable energy={energy} selectedEdges={lEdges} /></Col>    : null   }
        {mEdges.length >0 ?  <Col md={4} xs={12}><EdgeTable energy={energy} selectedEdges={mEdges} /></Col>    : null   }
      </Row>
    </Container>
  );
}

function EdgeTable( {energy, selectedEdges} ) {

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
                    availability    += ((edge.energy >= energy.minEnergyCP) & (edge.energy <= energy.maxEnergyCP)) ? "CP " : "" 
                    availability    += ((edge.energy >= energy.minEnergyLH) & (edge.energy <= energy.maxEnergyLH)) ? "LH " : "" 
                    availability    += ((edge.energy >= energy.minEnergyLV) & (edge.energy <= energy.maxEnergyLV)) ? "LV " : "" 

                    return (
                      <tr key={index} >
                        <td> {edge.element} {edge.edge.slice(0, 1)}<sub>{edge.edge.slice(1, edge.edge.length)}</sub> </td>
                        <td> {edge.energy.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} eV </td>
                        <td> {availability} </td>
                      </tr>
                    )
                  })}
              </tbody>
        </Table>
      </div>
      );
}

