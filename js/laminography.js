
const { Form, Button , Container, Row, Col, Table, ToggleButton, ToggleButtonGroup, Card, Alert} = ReactBootstrap;




function SiN_membrane(){
  const sample = new THREE.Group();

  const frameMaterial = new THREE.MeshBasicMaterial( { color: 0xaaaaaa } );
  sample.add( new THREE.Mesh( new THREE.BoxGeometry(1,3,0.2).translate( 1, 0, 0.1 ), frameMaterial ) );
  sample.add( new THREE.Mesh( new THREE.BoxGeometry(1,3,0.2).translate( -1, 0, 0.1 ), frameMaterial ) );
  sample.add( new THREE.Mesh( new THREE.BoxGeometry(1,1,0.2).translate( 0, 1, 0.1 ), frameMaterial ) );
  sample.add( new THREE.Mesh( new THREE.BoxGeometry(1,1,0.2).translate( 0, -1, 0.1 ), frameMaterial ) );

  sample.add( new THREE.Mesh( 
      new THREE.BoxGeometry(1,1,0.01).translate( 0, 0, 0.005 ), 
      new THREE.MeshBasicMaterial( { color: 0xdddddd } ) 
  ));
  return sample
}

function square(size){
var shape = new THREE.Shape();
shape.moveTo( -size/2,-size/2 );
shape.lineTo( -size/2, size/2 );
shape.lineTo( size/2, size/2 );
shape.lineTo( size/2, -size/2 );
shape.lineTo( -size/2, -size/2 );
return shape;
}

function ring(inner, outer){
var ring = new THREE.Shape();
ring.moveTo( outer/2 ,0);
ring.absarc( 0, 0, outer/2, 0, Math.PI*2, true );
ring.lineTo( inner/2,0 );
ring.absarc( 0, 0, inner/2, 0, Math.PI*2, false );
ring.lineTo( outer/2,0 );
return ring;
}



function FZP() {
var shape = square(1);
// shape.holes.push( ring(8,9) );
// shape.holes.push( ring(6,7) );
// shape.holes.push( ring(4,5) );

shape.holes.push( ring(0.18,0.2) );
shape.holes.push( ring(0.14,0.16) );
shape.holes.push( ring(0.10,0.12) );

var mesh = new THREE.Mesh(
    new THREE.ShapeBufferGeometry( shape ),
    new THREE.MeshBasicMaterial({ color: 0xaaaa00, side:THREE.DoubleSide})
);
return mesh;
}

function OSA() {
var shape = square(1);
shape.holes.push( ring(0,0.1) );

var mesh = new THREE.Mesh(
    new THREE.ShapeBufferGeometry( shape ),
    new THREE.MeshBasicMaterial({ color: 0x666600, side:THREE.DoubleSide})
);
return mesh;
}







function LaminographyVisualisation() {

  const divRef = React.useRef();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
  const camera = new THREE.PerspectiveCamera( 2, window.innerWidth / window.innerHeight, 0.1, 10000 );


  React.useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( 500, 350 );
    divRef.current.appendChild(renderer.domElement)

    const controls = new THREE.OrbitControls( camera, renderer.domElement );

    const animate = function () {
      requestAnimationFrame( animate );
      table.rotation.z += 0.005;
      controls.update();
      renderer.render( scene, camera );
    };
    animate();
  
  }, []);





  camera.position.set( -100, 50, -100 );
  const axesHelper = new THREE.AxesHelper( 5 );
  scene.add( axesHelper );









  const sample = SiN_membrane();




  // 10 mm square optics
  scene.add( FZP().translateZ(-3) );
  scene.add( OSA().translateZ(-1.5) );




  // sample mount
  const table = new THREE.Group();
  // table.translateZ(5) // move to out of focus position

const tablebox = new THREE.Mesh( new THREE.BoxGeometry(50,50,2) ,  new THREE.MeshBasicMaterial( { color: 0x44ffff } ) );
  tablebox.position.set( 0, 0, +1 );
  // table.add( tablebox );



  table.add( sample );
  var laminographyTilt = 60;
  scene.add( table.rotateX(Math.PI/180*laminographyTilt) );







  // beam
  const beamMaterial = new THREE.MeshBasicMaterial( {color: 0xbbff00, opacity:0.4, transparent:true} );

  // const geometry6 = new THREE.CylinderGeometry( 10, 10, 20, 32 );
  // const cylinder6 = new THREE.Mesh( geometry6.rotateX(Math.PI/2), beamMaterial );
  // scene.add( cylinder6.translateZ(-30.1) );

  const geometry7 = new THREE.ConeGeometry( 0.2/2, 2.9, 32 ); // 200 um diameter zone plate
  const cone7 = new THREE.Mesh( geometry7.rotateX(Math.PI/2), beamMaterial );
  scene.add( cone7.translateZ(-1.5) );

  // beam out - 10 degrees half angle
  const exitBeamAngle = Math.PI/180*10
  const exitBeamLength = 100
  const geometry8 = new THREE.ConeGeometry( exitBeamLength * Math.tan(exitBeamAngle), exitBeamLength , 32 ); // radius, length , segments
  const cone8 = new THREE.Mesh( geometry8.rotateX(-Math.PI/2), beamMaterial );
  scene.add( cone8.translateZ(exitBeamLength/2) );

  // detector
  var detector = new THREE.Mesh(
          new THREE.ShapeBufferGeometry( square(25) ),
          new THREE.MeshBasicMaterial({ color: 0x220000, opacity:0.5, transparent:true, side:THREE.DoubleSide})
  );
scene.add( detector.translateZ(exitBeamLength+0.1) );



  return(
    <div ref={divRef}></div>
  );
}



