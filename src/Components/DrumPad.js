import React from 'react';
import DrumSound from './DrumSound';


const DrumPad = ( {drumData, onSoundSelect, onKeyDown} ) =>  {

    

const buttonItems = drumData.map( (drumSound) => {
    return <DrumSound
    drumSound={drumSound} 
    key={drumSound.keyId} 
    onSoundSelect={onSoundSelect}
    onKeyDown={onKeyDown}
     />
    });

    return <div className="ui center aligned three column grid">{buttonItems}</div>
	
	}

export default DrumPad;