import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Sound from 'react-sound';
import { DrumSound } from './DrumSound';
//import boom from '../audio/boom.wav';
//import Col from 'react-bootstrap/Col';
//import	{TestComponent} from './TestComponent';

export class DrumPad extends Component {
	constructor (props) {
		super(props);
		this.state = {
			playStatus: Sound.status.STOPPED
		}
	
	this.handleClick = this.handleClick.bind(this); 
	
    this.handleKeyDown = this.handleKeyDown.bind(this); 
}

	componentDidMount() {
    	document.addEventListener('keydown', this.handleKeyDown, false);
    }

    componentWillUnmount() {
    	document.removeEventListener('keydown', this.handleKeyDown);
    }


handleKeyDown(event) {
    if(event.key === this.props.id) {
    	this.setState({
       		playStatus: Sound.status.PLAYING
    	})
    }
};

handleClick = () => {

	this.setState({
		playStatus: Sound.status.PLAYING
	})
}

	render() {
		console.log('drumpad component, showsound prop ' + this.props.showSound)
		return (
			<div className='pad'>
				<Button
				 onClick={this.handleClick} size="lg" block>{this.props.id}</Button>
				<DrumSound showSound={this.props.showSound} playStatus={this.state.playStatus} id={this.props.id }/>
			</div>
		);
	}
}


//setstate matching the ID of the event target
