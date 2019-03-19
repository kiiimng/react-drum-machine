import React from 'react';



const DrumSound = ({onSoundSelect, drumSound}) => {
	
	  return (
			<div className="column">
				<div className="ui button" 
					onClick={() => {onSoundSelect(drumSound)}}>
			  		{drumSound.keyId}
	    		</div>
			</div>
	  )
	}

export default DrumSound;

		// handleKeyDown = (event) => {
		// 	if (event.key === this.props.id) {
		// 		this.setState({
		// 			playStatus: Sound.status.PLAYING
		// 		})
		// 		// this.props.onSoundPlaying(this.props.soundName)
		// 	}
		// }

		// handleClick = (event) => {

		// 	if (event.target.innerHTML === this.props.id) {
		// 		this.setState ({
		// 			playStatus: Sound.status.PLAYING,
		// 			soundName: this.props.soundName
		// 		});
			
		// 		this.props.onSoundPlaying(this.state.soundName)
		// 	}
		// }



	// componentDidMount() {
	// 		document.addEventListener('keydown', this.handleKeyDown, false);
			
	// }

	// componentDidUpdate (prevProps, prevState) {
	// 	console.log(prevState)
	// 	if(prevState === Sound.status.PLAYING) {
	// 		this.setState ({
	// 		playStatus: Sound.status.STOPPED
	// 		})
	// 	}
		
	// }