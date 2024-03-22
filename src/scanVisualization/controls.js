import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Row, Col ,  Tab, Tabs} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';



function GUILine(props){
    return(
    <Row>
        <Col sm={4}>
            <Form.Label> {props.name} </Form.Label>
        </Col>
        <Col sm={3}>
            <Form.Control type="numeric" name={props.name} value={props.data[props.name]} onChange={(e) => props.setdata(props.name, e.target.value)}/> 
        </Col>
        <Col sm={5}>
            <Form.Range   type="numeric" value={props.data[props.name]} onChange={(e) => props.setdata(props.name, e.target.value)} {...props} />
        </Col>
    </Row>
    );
}




export class GUIControls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {scanRunning:true, rotationRunning:true, seconds:0, tab:'scan', 
                    scanRange:0.05, scanStep:0.01  };
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 100 );
        this.generateScanPositions();
      }

    componentDidUpdate(prevProps, prevState) {
        // console.log(this.state);

        if (prevState !== this.state) {
          //  console.log("state change");
        }

        if (prevProps.data.tilt !== this.props.data.tilt) {
            this.generateScanPositions();
        }
        if (prevState.scanRange !== this.state.scanRange) {
            this.generateScanPositions();
        }

        // if (prevState.scanRunning !== this.state.scanRunning) {
        //     if (this.state.scanRunning){
        //         this.timer = setInterval(() => this.tick(), 100 );
        //     } else {
        //         clearInterval(this.timer);
        //     }
            
        // }
    }

      componentWillUnmount() {
        clearInterval(this.timer);
      }

      tick() {
        this.setState({seconds: (this.state.seconds + 1)});

        if (this.state.scanRunning){
          var i = this.state.seconds % this.props.data.scanPositionList.length;
          this.props.setdata('scanX', this.props.data.scanPositionList[i][0]) ;
          this.props.setdata('scanY', this.props.data.scanPositionList[i][1]) ;
        }

        if (this.state.rotationRunning){
          var rotation = (parseInt(this.state.seconds / this.props.data.scanPositionList.length)*10) % 360;
          this.props.setdata('rotation', rotation ) ;
        }
      }


      generateScanPositions(){
        // console.log("Generate positions");
        var scanSize = this.state.scanRange + 0.00001;
        var scanSizeY = scanSize /(Math.cos(this.props.data.tilt*Math.PI/180));
        var scanStepX = this.state.scanStep;
        var scanStepY = scanStepX /(Math.cos(this.props.data.tilt*Math.PI/180));;
  
        var scanPositionList = [];
        for (var i=-scanSizeY/2; i<=scanSizeY/2; i+=scanStepY) {
            for (var j=-scanSize/2; j<=scanSize/2; j+=scanStepX) {
              scanPositionList.push([j,i]);
            }
        }
        this.props.setdata('scanPositionList', scanPositionList);
      }


    render() {
        // console.log(this.state);
      return (
        <Card className="position-absolute top-0 end-0" style={{ width: '25rem' }}>
        <Card.Body>

        <GUILine data={this.props.data} setdata={this.props.setdata} name='tilt' min={0} max={60} />

        <Tabs className="mb-3" activeKey={this.state.tab} onSelect={(k) => this.setState({tab:k})} >
        <Tab eventKey="scan" title="Scan">
                Move the beam in the scanning coordinate system
                <GUILine data={this.props.data} setdata={this.props.setdata} name='scanX' min={-1} max={1} step={0.01}/>
                <GUILine data={this.props.data} setdata={this.props.setdata} name='scanY' min={-1} max={1} step={0.01}/>
                <GUILine data={this.props.data} setdata={this.props.setdata} name='rotation' min={-180} max={180} step={1}/>
                {/* <GUILine data={this.props.data} setdata={console.log("updated")} name='rotation' min={-180} max={180} step={1}/> */}

                <GUILine data={this.state} setdata={(e,v) => this.setState({[e]: +v})} name='scanRange' min={0} max={1} step={0.01}/>

                <Form.Check type="switch" checked={this.state.scanRunning}  onChange={() => {this.setState({scanRunning: !this.state.scanRunning})} } label="2D Scan" />
                <Form.Check type="switch" checked={this.state.rotationRunning}  onChange={() => {this.setState({rotationRunning: !this.state.rotationRunning})} } label="Laminography rotation" />
            </Tab>

            <Tab eventKey="sample" title="Sample">
                Move the beam in the sample coordinate system
                <GUILine data={this.props.data} setdata={this.props.setdata} name='sampleX' min={-1} max={1} step={0.01}/>
                <GUILine data={this.props.data} setdata={this.props.setdata} name='sampleY' min={-1} max={1} step={0.01}/>
                {/* <GUILine data={props.data} setdata={props.setdata} name='sampleRotation' min={-180} max={180} step={1}/> */}
            </Tab>
        </Tabs>
        
        

        </Card.Body>
      </Card>
      );
    }
  }








