import React from 'react';
import './PowerButton.css';

class PowerButton extends React.Component {
state = {
    checked: 'checked'
}
handleSwitch = () => {

}
render() {
    return (
        <button>
        <label >
            {this.props.power}
            <input onChange={this.handleSwitch} className="input1" type="checkbox" /><span className="button1"></span>
        
        </label>

        </button>

    )
}
    
}


export default PowerButton;