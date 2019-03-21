import React from 'react';



class DrumSound extends React.Component {

	componentDidMount(props){
		document.addEventListener('keydown', this.onKeyDown, false);
	  }

	  onKeyDown = (event) => {
		if (event.key === this.props.drumSound.keyId) {
			this.props.onKeyDown(this.props.drumSound)
		}
	  }

render(props) {
	return (
		<div className="column drum">
			<div className="ui basic button inverted" 
				onClick={() => {this.props.onSoundSelect(this.props.drumSound)}
				}>
				  {this.props.drumSound.keyId}
			</div>
		</div>
  )

}
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