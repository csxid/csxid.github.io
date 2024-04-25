
const { Form, Button , Container, Row, Col, Table, ToggleButton, ToggleButtonGroup, Card, Alert} = ReactBootstrap;


function MagneticFieldPage() {
  const [magnitude, setMagnitude] = React.useState(100);
  const [theta, setTheta] = React.useState(0);
  const [phi, setPhi] = React.useState(0);

  const handleChangeMagnitude = (e) => {
    setMagnitude(e > 100 ? 100 : e); // Limit the value to a maximum of 10
  };

  return(
    <Container>
      <Row>

        <WedgeApp />



        <Col md={6} >
          <ViewField minMagnitudeOOP={-1} maxMagnitudeOOP={1} maxMagnitudeIP={4}/>
        </Col> 
        <Col md={6} >
          <h1> Vector : bipolar 1 </h1>
          <p> Concept to be explored </p>
          <ViewTable minMagnitudeOOP={"-125 mT"} maxMagnitudeOOP={"125 mT"} minMagnitudeIP={"~0 mT"} maxMagnitudeIP={"250 mT"} minPhi={"0 degrees"} maxPhi={"360 degrees"}/>
        </Col> 


        <Col md={6} >
          <ViewField minMagnitudeOOP={0} maxMagnitudeOOP={4} maxMagnitudeIP={4}/>
        </Col>
        <Col md={6} >
          <h1> Vector : unipolar </h1>
          <p> From magnet group modeling </p>
          <ViewTable minMagnitudeOOP={"~0 mT"} maxMagnitudeOOP={"250 mT"} minMagnitudeIP={"~0 mT"} maxMagnitudeIP={"250 mT"} minPhi={"0 degrees"} maxPhi={"360 degrees"}/>
        </Col> 

        <Col md={6} >
          <ViewField minMagnitudeOOP={0} maxMagnitudeOOP={0.1} maxMagnitudeIP={8}/>
        </Col>
        <Col md={6} >
          <h1> In-plane : high field </h1>
          <p> From magnet group modeling </p>
          <ViewTable minMagnitudeOOP={"n/a"} maxMagnitudeOOP={"n/a"} minMagnitudeIP={"~0 mT"} maxMagnitudeIP={"460 mT"} minPhi={"0 degrees"} maxPhi={"360 degrees"}/>
        </Col> 

        <Col md={6} >
          <ViewField minMagnitudeOOP={0} maxMagnitudeOOP={8} maxMagnitudeIP={0.1}/>
        </Col>
        <Col md={6} >
          <h1> Out-of-plane : high field </h1>
          <p>  From magnet group modeling </p>
          <ViewTable minMagnitudeOOP={"~0 mT"} maxMagnitudeOOP={"420 mT"} minMagnitudeIP={"n/a"} maxMagnitudeIP={"n/a"} minPhi={"n/a"} maxPhi={"n/a"}/>
        </Col> 

        <Col md={6} >
          <ViewField minMagnitudeOOP={-4} maxMagnitudeOOP={4} maxMagnitudeIP={0.1}/>
        </Col>
        <Col md={6} >
          <h1> Out-of-plane : bipolar </h1>
          <p>  Concept to be explored </p>
          <ViewTable minMagnitudeOOP={"-250 mT"} maxMagnitudeOOP={"250 mT"} minMagnitudeIP={"n/a"} maxMagnitudeIP={"n/a"} minPhi={"n/a"} maxPhi={"n/a"}/>
        </Col> 

      </Row>
    </Container>
  );
}


function ViewTable({minMagnitudeOOP, maxMagnitudeOOP, minMagnitudeIP, maxMagnitudeIP, minPhi, maxPhi}) {
  return(

    <Table striped bordered hover>
    <thead>
      <tr>
        <th></th>
        <th>Min</th>
        <th>Max</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td> In plane field magnitude</td>
      <td> {minMagnitudeIP} </td>
      <td> {maxMagnitudeIP} </td>
    </tr>
    <tr>
      <td> Out-of-plane field magnitude</td>
      <td> {minMagnitudeOOP} </td>
      <td> {maxMagnitudeOOP} </td>
    </tr>
    <tr>
      <td> In-plane field orientation</td>
      <td> {minPhi} </td>
      <td> {maxPhi}</td>
    </tr>
    </tbody>
    </Table>
  );
}

function ViewField({minMagnitudeOOP, maxMagnitudeOOP, maxMagnitudeIP}) {

  const divRef = React.useRef();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
  const camera = new THREE.PerspectiveCamera( 2, window.innerWidth / window.innerHeight, 0.1, 10000 );


  React.useEffect(() => {

    const renderer = new THREE.WebGLRenderer();
    // renderer.setSize( 500, 350 );
    renderer.setSize(divRef.current.clientWidth, divRef.current.clientWidth*0.8);
    divRef.current.appendChild(renderer.domElement)

    const controls = new THREE.OrbitControls( camera, renderer.domElement );

    const animate = function () {
      requestAnimationFrame( animate );
      controls.update();
      renderer.render( scene, camera );
    };
    animate();
  
  }, []);

 
  camera.position.set( 200, 50, 200 );

  const lights = new THREE.Group();
  lights.add( new THREE.AmbientLight( 0x404040 ) );
  // spotLight = new THREE.SpotLight( 0xffffff );
  const dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
  dirLight.position.set( 0, 10, 10 );
  lights.add( dirLight );
  scene.add(lights);


  var arrowPos = new THREE.Vector3( 0,0,0.01 );
  scene.add( new THREE.ArrowHelper( new THREE.Vector3( 1,0,0 ), arrowPos, 2, 0x7F2020, 0.1, 0.1 ) ); // dir, origin, length, hex
  scene.add( new THREE.ArrowHelper( new THREE.Vector3( 0,1,0 ), arrowPos, 2, 0x7F2020, 0.1, 0.1 ) );
  scene.add( new THREE.ArrowHelper( new THREE.Vector3( 0,0,1 ), arrowPos, 2, 0x7F2020, 0.1, 0.1 ) );


  const gridHelper = new THREE.GridHelper(10, 10);
  scene.add(gridHelper);

  // sample
  const sampleGeometry = new THREE.BoxGeometry(1,  1 , 0.1).rotateX(Math.PI/2)
  const sampleMaterial = new THREE.MeshStandardMaterial( { color: 0xeeeeee, roughness:0 } );
  scene.add( new THREE.Mesh( sampleGeometry, sampleMaterial ) ); 


  const height = (maxMagnitudeOOP-minMagnitudeOOP);
  const radius = maxMagnitudeIP;
  const geometry = new THREE.CylinderGeometry(radius, radius, height, 36,1).translate(0,height/2+minMagnitudeOOP,0);
  const material = new THREE.MeshStandardMaterial( { color: 0x9900ff, roughness:0,  opacity:0.2, transparent:true  } );
  scene.add( new THREE.Mesh( geometry, material ));

return(
  <div ref={divRef}></div>
  );
}



