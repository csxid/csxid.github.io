
const { Form, Button , Container, Row, Col, Table, ToggleButton, ToggleButtonGroup, Card, Alert} = ReactBootstrap;




function QMIVisualisation() {

  const divRef = React.useRef();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
  const camera = new THREE.PerspectiveCamera( 2, window.innerWidth / window.innerHeight, 0.1, 10000 );


  React.useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(divRef.current.clientWidth, divRef.current.clientWidth*0.8);
    divRef.current.appendChild(renderer.domElement)

    const controls = new THREE.OrbitControls( camera, renderer.domElement );


      // Resize canvas to match display size
  // const resizeCanvasToDisplaySize = () => {
  //   const canvas = renderer.domElement;
  //   const width = canvas.clientWidth;
  //   const height = canvas.clientHeight;
  //   // console.log(divRef.current.clientWidth);

  //   if (canvas.width !== width || canvas.height !== height) {
  //     renderer.setSize(width, height, false);
  //     camera.aspect = width / height;
  //     camera.updateProjectionMatrix();
  //   }
  // };
  var animationFrameId;

  const checkSize = function() {
    // console.log("checksize");
    renderer.setSize(divRef.current.clientWidth, divRef.current.clientWidth*0.8);
  }

    const animate = function () {
      animationFrameId = requestAnimationFrame( animate );
      controls.update();
      renderer.render( scene, camera );
      // checkSize();
    };
    // window.addEventListener('resize', checkSize());
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId); // Stop the animation loop
      renderer.dispose(); // Dispose of WebGL resources
    };
  
  }, []);








  camera.position.set( -1600, 1650, -1600 );
  const axesHelper = new THREE.AxesHelper( 5 );
  scene.add( axesHelper );

  // const plane = new THREE.Plane( new THREE.Vector3( 0, 0, 1 ), 3 );
  // const helper = new THREE.PlaneHelper( plane, 10, 0xffff00 );
  // scene.add( helper );


  function square(size){
      var shape = new THREE.Shape();
      shape.moveTo( -size,-size );
      shape.lineTo( -size, size );
      shape.lineTo( size, size );
      shape.lineTo( size, -size );
      shape.lineTo( -size, -size );
      return shape;
  }

  function ring(inner, outer){
      var ring = new THREE.Shape();
      ring.moveTo( outer ,0);
      ring.absarc( 0, 0, outer, 0, Math.PI*2, true );
      ring.lineTo( inner,0 );
      ring.absarc( 0, 0, inner, 0, Math.PI*2, false );
      ring.lineTo( outer,0 );
      return ring;
  }

  function FZP() {
      var shape = square(10);
      shape.holes.push( ring(8,9) );
      shape.holes.push( ring(6,7) );
      shape.holes.push( ring(4,5) );
      shape.holes.push( ring(2,3) );
      
      var mesh = new THREE.Mesh(
          new THREE.ShapeBufferGeometry( shape ),
          new THREE.MeshBasicMaterial({ color: 0xaaaa00, side:THREE.DoubleSide})
      );
      return mesh;
  }

  function OSA() {
      var shape = square(10);
      shape.holes.push( ring(0,2) );

      var mesh = new THREE.Mesh(
          new THREE.ShapeBufferGeometry( shape ),
          new THREE.MeshBasicMaterial({ color: 0x666600, side:THREE.DoubleSide})
      );
      return mesh;
  }
        
  scene.add( FZP().translateZ(-20) );
  scene.add( OSA().translateZ(-5) );


  // detector
  var detector = new THREE.Mesh(
          new THREE.ShapeBufferGeometry( square(50) ),
          new THREE.MeshBasicMaterial({ color: 0x220000, opacity:0.5, transparent:true, side:THREE.DoubleSide})
  );
  scene.add( detector.translateZ(50) );



      // sample
  const geometry = new THREE.BoxGeometry(2,2,2);
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );





  // beam
  const beamMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, opacity:0.4, transparent:true} );

  const geometry6 = new THREE.CylinderGeometry( 10, 10, 20, 32 );
  const cylinder6 = new THREE.Mesh( geometry6.rotateX(Math.PI/2), beamMaterial );
  scene.add( cylinder6.translateZ(-30.1) );

  const geometry7 = new THREE.ConeGeometry( 10, 20, 32 );
  const cone7 = new THREE.Mesh( geometry7.rotateX(Math.PI/2), beamMaterial );
  scene.add( cone7.translateZ(-10) );

  const geometry8 = new THREE.ConeGeometry( 10, 20, 32 );
  const cone8 = new THREE.Mesh( geometry8.rotateX(-Math.PI/2), beamMaterial );
  scene.add( cone8.translateZ(10.1) );


  return(
    // <div  style={{ width: '100%', height: '100vh' }}  ref={divRef}></div>
    <div  style={{ width: '100%'}}  ref={divRef}></div>
  );
}



