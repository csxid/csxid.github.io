function optic(angle, stripes=["Ni"]){
    const out = new THREE.Group();

    const length = 0.5;
    const thickness = 0.03;
    var width = 0.05;
    var coatingWidth = 0.05;

    if (stripes.length == 1){
         width = 0.05;
         coatingWidth = width * 0.7;
    } else {
         width = 0.09;
         coatingWidth = width/2 * 0.7;
    }

    const substrateMaterial = new THREE.MeshStandardMaterial( { color: 0xaaaaaa, roughness:0 } );
    const substrate = new THREE.Mesh( new THREE.BoxGeometry(thickness, width, length), substrateMaterial );
    substrate.translateX(-thickness/2 - 0.001);
    out.add(substrate);
    
    for (var i = 0; i < stripes.length; i++) {
        var color;
        if (stripes[i] == "Ni"){ color= 0x888078; }
        if (stripes[i] == "Pt"){ color= 0xc0c0c0; }
        const coatingMaterial = new THREE.MeshStandardMaterial( { color: color, roughness:0, metalness: 0,} );
        const coating = new THREE.Mesh( new THREE.BoxGeometry(0.002, coatingWidth, length), coatingMaterial );

        if (stripes.length == 2){
            if (i == 0){ coating.translateY( + coatingWidth * 0.7   ); }
            if (i == 1){ coating.translateY( - coatingWidth * 0.7   ); }
        } 
        out.add(coating);
    }

    out.rotateY(Math.PI/180* angle);

    // const axesHelper = new THREE.AxesHelper( 0.2 );
    // out.add( axesHelper );
    return out;
}

function mirrorM1(){
    const M1a = optic(params["M1"]['angle']*angleFactor);
    const M1b = optic(params["M1"]['angle']*angleFactor);

    const translation = new THREE.Group();
    translation.add(M1a);
    translation.add(M1b);

    const system = new THREE.Group();
    system.add(translation);

    const sep_y = 0.07;

    M1a.position.y = sep_y/2;
    M1b.position.y = -sep_y/2;

    translation.position.y = sep_y/2;
    return system;
}





function PGMsystem(){
    const G1 = optic(0, stripes=["Ni"]);
    const G2 = optic(0, stripes=["Ni"]);
    const G3 = optic(0, stripes=["Ni"]);
    const gratingFrame = new THREE.Group();
    gratingFrame.rotateX(-Math.PI/180 * 5)

    gratingFrame.add(G1.rotateZ(-Math.PI/2));
    gratingFrame.add(G2.rotateZ(-Math.PI/2));
    gratingFrame.add(G3.rotateZ(-Math.PI/2));

    const M2 = optic(0, stripes=["Ni","Pt"]);
    const mirrorFrame = new THREE.Group();
    mirrorFrame.add(M2.rotateZ(Math.PI/2));
    mirrorFrame.rotateX(-Math.PI/180 * 5)

    mirrorFrame.position.y = -pgmOffset;
    mirrorFrame.position.z = -pgmOffset;
    

    const system = new THREE.Group();
    system.add(gratingFrame);
    system.add(mirrorFrame);
    system.position.y = pgmOffset;

    const sep_M = 0.06;
    const sep_G = 0.15;

    G1.position.x = -sep_G/2;
    G2.position.x = 0;
    G3.position.x = +sep_G/2;

    mirrorFrame.position.x = -sep_M/2;
    gratingFrame.position.x = -sep_G/2;
    return system;
}






function mirrorM3M5(){
    const M3a = optic(params["M3"]['angle']*angleFactor, stripes=["Ni"]);
    const M3b = optic(params["M3"]['angle']*angleFactor, stripes=["Pt"]);
    const M5a = optic(params["M5"]['angle']*angleFactor, stripes=["Ni"]);
    const M5b = optic(params["M5"]['angle']*angleFactor, stripes=["Pt"]);


    const translation = new THREE.Group();
    translation.add(M3a);
    translation.add(M3b);
    translation.add(M5a);
    translation.add(M5b);

    const system = new THREE.Group();
    system.add(translation);

    const sep_x = 0.1;
    const sep_y = 0.07;

    M3a.position.y = sep_y/2;
    M3b.position.y = -sep_y/2;
    M5a.position.y = sep_y/2;
    M5b.position.y = -sep_y/2;

    M3a.position.x = -sep_x/2;
    M3b.position.x = -sep_x/2;
    M5a.position.x = sep_x/2;
    M5b.position.x = sep_x/2;

    M5a.rotateY(Math.PI);
    M5b.rotateY(Math.PI);

    translation.position.y = sep_y/2;
    translation.position.x = sep_x/2;
    return system;
}


function mirrorM4(){
    const M4 = optic(params["M4"]['angle']*angleFactor, stripes=["Ni","Pt"]);

    const translation = new THREE.Group();
    translation.add(M4);

    const system = new THREE.Group();
    system.add(translation);

    translation.position.y = 0.03;
    return system;
}

function mirrorM6(){
    const M6 = optic(params["M6"]['angle']*angleFactor, stripes=["Ni","Pt"]);

    const translation = new THREE.Group();
    translation.add(M6);

    const system = new THREE.Group();
    system.add(translation);

    translation.position.y = 0.03;
    system.rotateY(Math.PI);
    return system;
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
    dirLight.position.set( 20, 10, 10 );
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
    const group = new THREE.Group();

    var shape = new THREE.Shape();
    shape.moveTo( 0.22/2 ,0);
    shape.absarc( 0, 0, 0.22/2, 0, Math.PI*2, true );

    shape.holes.push( ring(0.18,0.2) );
    shape.holes.push( ring(0.14,0.16) );
    shape.holes.push( ring(0.10,0.12) );
    shape.holes.push( ring(0.06,0.08) );
    
    var mesh = new THREE.Mesh(
        new THREE.ShapeBufferGeometry( shape ),
        new THREE.MeshStandardMaterial({ color: 0xaaaa00, side:THREE.DoubleSide})
    );
    group.add(mesh)
    return group;
}

function OSA() {
    const group = new THREE.Group();

    const frameSize=3;
    const frameMaterial = new THREE.MeshStandardMaterial( { color: 0xeeeeee, roughness:0 } );
    group.add( new THREE.Mesh( new THREE.BoxGeometry(frameSize,  frameSize/3,0.2).translate( 0, -frameSize/3, -0.1 ), frameMaterial ) ); // bottom
    group.add( new THREE.Mesh( new THREE.BoxGeometry(frameSize/3,frameSize/3,0.2).translate( -frameSize/3, 0, -0.1 ), frameMaterial ) ); // side
    group.add( new THREE.Mesh( new THREE.BoxGeometry(frameSize/3,frameSize/3,0.2).translate(  frameSize/3, 0, -0.1 ), frameMaterial ) ); // side


    shape = square(1);
    shape.holes.push( ring(0,0.1) );

    var mesh = new THREE.Mesh(
        new THREE.ShapeBufferGeometry( shape ),
        new THREE.MeshBasicMaterial({ color: 0x666600, side:THREE.DoubleSide})
    );
    group.add(mesh);
    return group;
}





function beam(start, stop){
    const out = new THREE.Group();
    var beamSizeAtZonePlate = 0.01; // diameter (mm)


    // beam
    const beamMaterial = new THREE.MeshBasicMaterial( {color: 0xbbff00, opacity:0.4, transparent:true} );

    // beam before the zone plate
    var geometry = new THREE.CylinderGeometry( beamSizeAtZonePlate*2, beamSizeAtZonePlate*2, (stop-start), 32, openEnded=true ); // radius1, radius2, height, radius segments,
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

    return out;
}