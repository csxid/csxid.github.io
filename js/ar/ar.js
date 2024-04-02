

function AR() {
  const [energy, setEnergy] = React.useState(700);
  const [laa, setLaa] = React.useState(0);
  const [coherence, setCoherence] = React.useState(1);

    return (
      <div>
        <h1>AR</h1>


        <model-viewer alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum" 
            style={{width: "800px", height: "600px"}}
            src="./js/ar/NeilArmstrong.glb" 
            ar environment-image="./js/ar/moon_1k.hdr" 
            poster="./js/ar/NeilArmstrong.webp" 
            shadow-intensity="1" camera-controls touch-action="pan-y">
        </model-viewer>



        https://modelviewer.dev/

      </div>
      );
}




