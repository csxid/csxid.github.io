

function AR() {
  const [key, setKey] = React.useState('tab1');

    return (
      <div style={{ height: '100vh' }}>
        {/* <h1>AR</h1> */}


        <Tabs variant="pills" id="ar-tabs" activeKey={key} onSelect={(k) => setKey(k)} >
          <Tab eventKey="tab1" title="Astronaught" style={{ height: '100vh' }} >
            
            <model-viewer alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum" 
                style={{width: "100%", height: "80%"}}
                src="./js/ar/NeilArmstrong.glb" 
                ar environment-image="./js/ar/moon_1k.hdr" 
                poster="./js/ar/NeilArmstrong.webp" 
                shadow-intensity="1" camera-controls touch-action="pan-y">
            </model-viewer>
          </Tab>

          <Tab eventKey="tab2" title="Data" style={{ height: '100vh' }}>
          <model-viewer 
              style={{width: "100%", height: "80%"}}
              src="./js/ar/cylinder.gltf"
              ar
              camera-controls >
          </model-viewer>
          </Tab>
        
        </Tabs>









        {/* https://modelviewer.dev/ */}

      </div>
      );
}




