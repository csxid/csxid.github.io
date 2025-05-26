// sample


function optic(angle){
    const opticMaterial = new THREE.MeshStandardMaterial( { color: 0xaaaaaa, roughness:0 } );;
    const cube = new THREE.Mesh( new THREE.BoxGeometry(0.05, 0.05, 0.5), opticMaterial );
    const out = new THREE.Group();
    out.add(cube);
    cube.rotateY(Math.PI/180* angle);
    cube.translateX(-0.05/2);

    const axesHelper = new THREE.AxesHelper( 0.2 );
    out.add( axesHelper );

    return out;
}



function lighting() {
    const lights = new THREE.Group();
    			// Lights

                lights.add( new THREE.AmbientLight( 0x404040 ) );

    // spotLight = new THREE.SpotLight( 0xffffff );
    // spotLight.name = 'Spot Light';
    // spotLight.angle = Math.PI / 5;
    // spotLight.penumbra = 0.3;
    // spotLight.position.set( 10, 10, 5 );
    // spotLight.castShadow = true;
    // spotLight.shadow.camera.near = 8;
    // spotLight.shadow.camera.far = 30;
    // spotLight.shadow.mapSize.width = 1024;
    // spotLight.shadow.mapSize.height = 1024;
    // scene.add( spotLight );

    // scene.add( new THREE.CameraHelper( spotLight.shadow.camera ) );

    dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
    dirLight.name = 'Dir. Light';
    dirLight.position.set( 0, 10, 10 );
    dirLight.castShadow = true;
    // dirLight.shadow.camera.near = 1;
    // dirLight.shadow.camera.far = 10;
    // dirLight.shadow.camera.right = 15;
    // dirLight.shadow.camera.left = - 15;
    // dirLight.shadow.camera.top	= 15;
    // dirLight.shadow.camera.bottom = - 15;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    lights.add( dirLight );

    // scene.add( new THREE.CameraHelper( dirLight.shadow.camera ) );

    return lights;
}




function beam(start, stop){
    const out = new THREE.Group();
    var beamSizeAtZonePlate = 0.01; // diameter (mm)


    // beam
    const beamMaterial = new THREE.MeshBasicMaterial( {color: 0xbbff00, opacity:0.4, transparent:true} );

    // beam before the zone plate
    var geometry = new THREE.CylinderGeometry( beamSizeAtZonePlate*2, beamSizeAtZonePlate*2, (stop-start), 32 ); // radius1, radius2, height, radius segments,
    var mesh = new THREE.Mesh( geometry.rotateX(-Math.PI/2), beamMaterial );

    out.add( mesh.translateZ(start + (stop-start)/2));

    // // const geometry7 = new THREE.ConeGeometry( 0.2/2, 2.9, 32 ); // 200 um diameter zone plate
    // const geometry7 = new THREE.CylinderGeometry( 0.2/2, beamSizeAtSample, 3, 32 ); // radius1, radius2, height, radius segments,
    // const cone7 = new THREE.Mesh( geometry7.rotateX(-Math.PI/2), beamMaterial );
    // out.add( cone7.translateZ(-1.5) );

    // // beam out - 10 degrees half angle
    // const exitBeamAngle = Math.PI/180*10
    // const exitBeamLength = 70 // mm
    // const geometry8 = new THREE.CylinderGeometry( beamSizeAtSample, exitBeamLength * Math.tan(exitBeamAngle), exitBeamLength, 32 ); // radius1, radius2, height, radius segments,
    // // const geometry8 = new THREE.ConeGeometry( exitBeamLength * Math.tan(exitBeamAngle), exitBeamLength , 32 ); // radius, length , segments
    // const cone8 = new THREE.Mesh( geometry8.rotateX(-Math.PI/2), beamMaterial );
    // out.add( cone8.translateZ(exitBeamLength/2) );

    // // detector
    // var detector = new THREE.Mesh(
    //         new THREE.ShapeBufferGeometry( square(25) ),
    //         new THREE.MeshBasicMaterial({ color: 0x220000, opacity:0.5, transparent:true, side:THREE.DoubleSide})
    // );
    // out.add( detector.translateZ(exitBeamLength+0.5) );

    return out;
}