import React from 'react';
import DrumPad from './Components/DrumPad';
import Display from './Components/Display';
import boom from './audio/boom.wav';
import clap from './audio/clap.wav';
import hihat from './audio/hihat.wav';
import kick from './audio/kick.wav';
import openhat from './audio/openhat.wav';
import ride from './audio/ride.wav';
import snare from './audio/snare.wav';
import tink from './audio/tink.wav';
import tom from './audio/tom.wav';

const drumData = [ 
    {keyId: 'q', soundName: 'boom', url: boom  },
    {keyId: 'w', soundName: 'clap', url: clap  },
    {keyId: 'e', soundName: 'hihat', url: hihat },
    {keyId: 'a', soundName: 'kick', url: kick },
    {keyId: 's', soundName: 'openhat', url: openhat},
    {keyId: 'd', soundName: 'ride', url: ride },
    {keyId: 'z', soundName: 'snare', url: snare },
    {keyId: 'x', soundName: 'tink', url: tink },
    {keyId: 'c', soundName: 'tom', url: tom  }
    ]

class App extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        soundName: ''
      }
  }
  
  onSoundPlaying = (soundName) => {
    this.setState ({
      soundName: soundName
    })
  }


  render() {
    return (
      <div className="ui container">
        <div>
          <DrumPad  drumData={drumData} onSoundPlaying={this.onSoundPlaying} />
        </div>
        <div className="ui header">
          <Display soundName={this.state.soundName} />
        </div>
      </div>
      );
  }
}

export default App;
