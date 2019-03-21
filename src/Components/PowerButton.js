import React from 'react';
//import './PowerButton.css';

class PowerButton extends React.Component {
state = {
    checked: 'checked'
}
handleSwitch = () => {

}
render() {
    return (
        
        <label >
            <input  className="input1" type="checkbox" /><span className="button1"></span>
        
        </label>


    )
}
    
}


export default PowerButton;