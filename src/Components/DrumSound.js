import React from 'react';
import Sound from 'react-sound';


class DrumSound extends React.Component {

	state = {
		playStatus: Sound.status.STOPPED
		}
	
	
	render(props) {
	  return (
		  <div className="ui button" onClick={ () => { this.setState({ playStatus: Sound.status.PLAYING }) } }>
			  {this.props.id}
		    <Sound
		      url={this.props.url}
		      playStatus={this.state.playStatus}
		      //playFromPosition={300 /* in milliseconds */}
		      onLoading={this.handleSongLoading}
		      onPlaying={this.handleSongPlaying}
		      onFinishedPlaying={this.handleSongFinishedPlaying}
		    />
	    </div>
	  )
	}
}

export default DrumSound;