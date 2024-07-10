

function Aframe() {

    return (
      <div style={{ height: '100vh' }}>
        <h1>Aframe</h1>


        <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>


        {/* <a-scene> */}
              {/* <a-assets>
                <a-asset-item id="tree-obj" src="./js/aframe/cube.obj"></a-asset-item>
                <a-asset-item id="tree-mtl" src="./js/aframe/cube.mtl"></a-asset-item>
              </a-assets>

              <a-entity obj-model="obj: #tree-obj; mtl: #tree-mtl"></a-entity> */}


              {/* <a-entity id="box" geometry="primitive: box" material="color: red"></a-entity>

            </a-scene> */}


      </div>
      );
}




