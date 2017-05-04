import React, {Component} from 'react';
import './TimeDisplay.css';

class TimeDisplay extends Component {
    render() {
        return (
            <div className="time-display">
                <label className="time-display status working">Working</label>
                <h3 className="time-display time">12:00</h3>
            </div>
        );
    }
}

export default TimeDisplay;