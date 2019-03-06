import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import { DrumPad } from './Components/DrumPad';
//import { TestComponent } from './Components/TestComponent';

//import Sound from 'react-sound';
//import boom from '../src/audio/boom.wav';


import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      soundText: 'boom'
    }
  }

  componentDidMount() {
      this.showSound()
    }


showSound = (id) => {
  this.setState({
    soundText: id
  });
}

  render() {
    return (
      <div className="Container">
          <Row>
          <DrumPad  id='q' showSound={this.showSound}/>
          <DrumPad  id='w' showSound={this.showSound}  />
          <DrumPad  id='e' showSound={this.showSound} />
        </Row>
        <Row>
          <DrumPad  id='a' showSound={this.showSound}/>
          <DrumPad  id='s' showSound={this.showSound}/>
          <DrumPad  id='d' showSound={this.showSound}/>
        </Row>
       <Row>
          <DrumPad  id='z' showSound={this.showSound}/>
          <DrumPad  id='x' showSound={this.showSound}/>
          <DrumPad  id='c' showSound={this.showSound}/>
        </Row>
       <div >{this.state.soundText}</div>
      </div>
    );
  }
}

export default App;


//create drum component
//DrumPad component will get passed a prop
//prop name=''

//<DrumPad name='A' />