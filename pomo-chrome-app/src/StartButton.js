import React, {Component} from 'react';

import FlatButton from 'material-ui/FlatButton';

import './StartButton.css';

class StartButton extends Component {
    render() {
        return (
          <div className="start-button">
            <FlatButton label="Start" fullWidth={true} primary={true} />
          </div>
        );
    }
}

export default StartButton;