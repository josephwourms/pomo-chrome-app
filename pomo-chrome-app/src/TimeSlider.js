import React, {Component} from 'react';

import Slider from 'material-ui/Slider';

import './TimeSlider.css';

class TimeSlider extends Component {
    render() {
        return (
            <div className="time-slider">
                <label className="time-slider label">{this.props.label + this.props.value}</label>
                <Slider 
                    min={60}
                    max={3600}
                    step={60}
                    value={this.props.value}
                />
            </div>
        );
    }
}

export default TimeSlider;