import React, { Component } from 'react';
import Sound from 'react-sound';
import boom from '../audio/boom.wav';
import clap from '../audio/clap.wav';
import hihat from '../audio/hihat.wav';
import kick from '../audio/kick.wav';
import openhat from '../audio/openhat.wav';
import ride from '../audio/ride.wav';
import snare from '../audio/snare.wav';
import tink from '../audio/tink.wav';
import tom from '../audio/tom.wav';
//import	{TestComponent} from './TestComponent';

export class DrumSound extends Component {
	constructor(props) {
		super(props);

		this.state = ({
			q: boom,
			w: clap,
			e: hihat,
			a: kick,
			s: openhat,
			d: ride,
			z: snare,
			x: tink,
			c: tom

		})
}
	componentDidMount(props) {
    	console.log('drumsound props: ' + this.props.showSound);
    	this.props.showSound(this.state[this.props.id])
    }
	
	


	render() {
	  return (
	  	<div>

		    <Sound
		      url={this.state[this.props.id]}
		      playStatus={this.props.playStatus}
		      //playFromPosition={300 /* in milliseconds */}
		      onLoading={this.handleSongLoading}
		      onPlaying={this.handleSongPlaying}
		      onFinishedPlaying={this.handleSongFinishedPlaying}
		    />
	    </div>
	  );
	}
}
