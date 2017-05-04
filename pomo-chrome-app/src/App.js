import React, { Component } from 'react';
import './App.css';

//Material-UI Components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';

// Custom Components
import TimeDisplay from './TimeDisplay';
import ShowMoreButton from './ShowMoreButton';
import ControlPanel from './ControlPanel';
import StartButton from './StartButton';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      'started': false,
      'working': false,
      'time': this.props.workTime,
      'workTime': this.props.workTime,
      'breakTime': this.props.breakTime,
      'showMore': false,
    };
    
    // Variable Initialization
    
    // Method binding
  }
  
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="container">
            <div className="item time-display">
              <TimeDisplay />
            </div>
            <div className="item show-more">
              <ShowMoreButton />
            </div>
          </div>
          <StartButton />
          <Divider />
          <ControlPanel />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
