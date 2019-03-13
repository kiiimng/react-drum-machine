import React from 'react';

import DrumPad from './Components/DrumPad';
//import { TestComponent } from './Components/TestComponent';

//import Sound from 'react-sound';
//import boom from '../src/audio/boom.wav';


// const data = [ 
//   {keyId: 'q', soundName: 'boom', url: ''  },
//   {keyId: 'w', soundName: 'clap', url: ''  },
//   {keyId: 'e', soundName: 'hihat', url: '' },
//   {keyId: 'a', soundName: 'kick', url: '' },
//   {keyId: 's', soundName: 'openhat', url: ''},
//   {keyId: 'd', soundName: 'ride', url: '' },
//   {keyId: 'z', soundName: 'share', url: '' },
//   {keyId: 'x', soundName: 'tink', url: '' },
//   {keyId: 'c', soundName: 'tom', url: ''  }
//   ]

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
          <DrumPad />
        </div>
    );
  }
}

export default App;
