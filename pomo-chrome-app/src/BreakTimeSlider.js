import React, {Component} from 'react';

import TimeSlider from './TimeSlider';

class BreakTimeSlider extends Component {
    render() {
        return (
            <div className="time-slider">
                <TimeSlider
                    value={300}
                    label="Break Time: "
                />
            </div>
        );
    }
}

export default BreakTimeSlider;