import React from 'react';
import Sound from 'react-sound';


class DrumSound extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			playStatus: Sound.status.STOPPED
		}
	}
	
		handleKeyDown = (event) => {
			if (event.key === this.props.id) {
				this.setState({
					playStatus: Sound.status.PLAYING
				})
			}
		}

		handleClick = () => {
			this.setState ({
				playStatus: Sound.status.PLAYING
			});
			
			this.props.onSoundPlaying(this.props.soundName)



		}

	componentDidMount() {
    	document.addEventListener('keydown', this.handleKeyDown, false)
    }

	render(props) {
	  return (
			<div className="column">
				<div className="ui button" 
					onClick={this.handleClick}
				>
			  {this.props.id}
		    <Sound
		      url={this.props.url}
		      playStatus={this.state.playStatus}
		      //playFromPosition={300 /* in milliseconds */}
		      onLoading={this.handleSongLoading}
		      onPlaying={this.handleSongPlaying}
					onFinishedPlaying={this.handleSongFinishedPlaying}
					autoLoad={true}
		    />
	    </div>
			</div>
			
	  )
	}
}

export default DrumSound;