<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>GeoAR.js demo</title>
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
    <script src="https://unpkg.com/aframe-look-at-component@0.8.0/dist/aframe-look-at-component.min.js"></script>
    <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar-nft.js"></script>
  </head>

  <body style="margin: 0; overflow: hidden;">
    <a-scene
      vr-mode-ui="enabled: false"
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false;"
    >


    <a-text
    value="Hi."
    look-at="[gps-camera]"
    scale="12 12 12"
    gps-projected-entity-place="latitude: 51.669724; longitude: -1.2899051;" ></a-text>


    <a-text
    value="building"
    look-at="[gps-camera]"
    scale="12 12 12"
    position="0 -30 0" 
    gps-entity-place="latitude: 51.66968751; longitude: -1.290849;"  ></a-text>



    <a-text
    value="Abingdon this way"
    look-at="[gps-camera]"
    scale="50 50 50"
    position="0 0 0" 
    gps-entity-place="latitude: 51.670913; longitude: -1.282512;"  ></a-text>



<!-- 
    <a-box material="color: yellow" gps-entity-place="latitude: 51.669414; longitude: -1.290152" position="0 00 0"/> -->


    <a-torus-knot color="#B84A39" arc="180" p="2" q="7" radius="5" radius-tubular="0.1"
    gps-entity-place="latitude: 51.670091; longitude: -1.290408;"></a-torus-knot>


    <a-tetrahedron color="#FF926B" radius="5"
    gps-entity-place="latitude: 51.670117; longitude: -1.290107;"></a-tetrahedron>




    
    <a-text
    value="Gute Nacht von den Taube"
    look-at="[gps-camera]"
    scale="12 12 12"
    gps-entity-place="latitude: 51.734946; longitude: -1.211679;" ></a-text>



      <a-camera gps-camera rotation-reader> </a-camera>
    </a-scene>
  </body>
</html>