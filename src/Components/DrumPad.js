import React from 'react';
import DrumSound from './DrumSound';


const DrumPad = ( {drumData, onSoundPlaying} ) =>  {

const buttonItems = drumData.map( (data) => {
    return <DrumSound
    id={data.keyId} 
    url={data.url} 
    key={data.keyId} 
    soundName={data.soundName}
    onSoundPlaying={onSoundPlaying} />
    });

    return <div className="ui center aligned three column grid">{buttonItems}</div>
	
	}

export default DrumPad;