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
import PowerButton from './Components/PowerButton';

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

      state = {
        selectedSound: '',
        power: "true"
      };

  
  onSoundSelect = (sound) => {
    this.setState ({
      selectedSound: sound,
    });
    if(sound === this.state.selectedSound) {
      document.getElementById('player').currentTime = 0
      document.getElementById('player').play()
    }  
  };

  handleKeyDown = (sound) => {
    this.setState ({
      selectedSound: sound,
    });
    if(sound === this.state.selectedSound) {
      document.getElementById('player').currentTime = 0
      document.getElementById('player').play()
    }  
    }

    switchPower = () => {
      console.log(this.state.power)
      this.setState({ 
        power: this.state.power === 'true' ? 'false' : 'true'
      })
    }

 
    
    shouldComponentUpdate(){
      return this.state.power
    }

  render() {
    return (
      <div className="ui container">
        <div>
          <DrumPad  drumData={drumData} onSoundSelect={this.onSoundSelect} onKeyDown={this.handleKeyDown}/>
        </div>
        <audio id="player" src={this.state.selectedSound.url} autoPlay={true}></audio>

        <div className="ui header">
          <Display soundName={this.state.selectedSound.soundName} />
        </div>
        <PowerButton power={this.state.power} onClick={this.switchPower}/>
      </div>
      );
  }
}

export default App;

// Sound
// url={this.state.selectedSound.url}
// playStatus={this.state.playStatus}
// //playFromPosition={300 /* in milliseconds */}
// onLoading={this.handleSongLoading}
// onPlaying={this.handleSongPlaying}
// onFinishedPlaying={this.handleSongFinishedPlaying}
// autoLoad={true}
