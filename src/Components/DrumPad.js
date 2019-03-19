import React from 'react';
import DrumSound from './DrumSound';


const DrumPad = ( {drumData, onSoundSelect} ) =>  {

const buttonItems = drumData.map( (drumSound) => {
    return <DrumSound
    drumSound={drumSound} 
    key={drumSound.keyId} 
    onSoundSelect={onSoundSelect}
     />
    });

    return <div className="ui center aligned three column grid">{buttonItems}</div>
	
	}

export default DrumPad;