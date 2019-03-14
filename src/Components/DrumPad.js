import React from 'react';
import DrumSound from './DrumSound';
import boom from '../audio/boom.wav';
import clap from '../audio/clap.wav';
import hihat from '../audio/hihat.wav';
import kick from '../audio/kick.wav';
import openhat from '../audio/openhat.wav';
import ride from '../audio/ride.wav';
import snare from '../audio/snare.wav';
import tink from '../audio/tink.wav';
import tom from '../audio/tom.wav';

const data = [ 
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

const DrumPad = () => {

// 	componentDidMount() {
//     	document.addEventListener('keydown', this.handleKeyDown, false);
//     }

//     componentWillUnmount() {
//     	document.removeEventListener('keydown', this.handleKeyDown);
//     }


// handleKeyDown(event) {
//     if(event.key === this.props.id) {
//     	this.setState({
//        		playStatus: Sound.status.PLAYING
//     	})
//     }
// };


const buttonData = data.map( ({keyId, url}) => {
	return <DrumSound id={keyId} url={url} key={keyId}/>
})
		return (
			<div>
				{buttonData}
			</div>
		);
	}

export default DrumPad;