
function Pixels() {

  const divRef = React.useRef();

  const scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
  const camera = new THREE.PerspectiveCamera( 2, window.innerWidth / window.innerHeight, 0.1, 1000 );


  React.useEffect(() => {
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(divRef.current.clientWidth, divRef.current.clientWidth*0.8);
    divRef.current.appendChild(renderer.domElement)

    const controls = new THREE.OrbitControls( camera, renderer.domElement );

    var animationFrameId;

    const animate = function () {
      animationFrameId = requestAnimationFrame( animate );
      controls.update();
      renderer.render( scene, camera );
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId); // Stop the animation loop
      renderer.dispose(); // Dispose of WebGL resources
    };
  
  }, []);



  camera.position.set( -200, 100, -100 );

  const pointLight = new THREE.PointLight( 0xffffff, 0.9, 0, 0 ); // color, intensity, distance, decay
  pointLight.position.set(-200, 150, -100);
  scene.add( pointLight );

  const ambientLight = new THREE.AmbientLight( 0xffffff, 1 );
  scene.add( ambientLight );


  const geometry = new THREE.BoxGeometry(0.9,0.9,0.9);
  geometry.translate(0.45, 0.45, 0.45);
  const material = new THREE.MeshStandardMaterial( {
    color: 0xcccccc,
    metalness: 0.3,   // between 0 and 1
    roughness: 0, // between 0 and 1
  } );

  for (let x = -2; x < 2; x++) {
      for (let y = -2; y < 2; y++) {
          for (let z = -2; z < 2; z++) {
            const cube = new THREE.Mesh( geometry, material );
            cube.position.set(x, y, z);
            scene.add( cube );
          }
      }
  }


  return(
    <div  style={{ height: '100vh'}}  ref={divRef}></div>
  );
}



