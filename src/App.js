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
import Sound from 'react-sound';

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
        selectedSound: boom,
        playStatus: Sound.status.STOPPED, 
      };

  
  onSoundSelect = (sound) => {
    console.log(sound)
    this.setState ({
      selectedSound: sound,
      playStatus: Sound.status.PLAYING
    });
  };


  render() {
    return (
      <div className="ui container">
        <div>
          <DrumPad  drumData={drumData} onSoundSelect={this.onSoundSelect} />
        </div>
        <Sound
		      url={this.state.selectedSound.url}
		      playStatus={this.state.playStatus}
		      //playFromPosition={300 /* in milliseconds */}
		      onLoading={this.handleSongLoading}
		      onPlaying={this.handleSongPlaying}
					onFinishedPlaying={this.handleSongFinishedPlaying}
					autoLoad={true}
		    />
        <div className="ui header">
          <Display soundName={this.state.selectedSound.soundName} />
          </div>
      </div>
      );
  }
}

export default App;
