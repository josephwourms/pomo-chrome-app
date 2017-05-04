import React, {Component} from 'react';

import TimeSlider from './TimeSlider';

class WorkTimeSlider extends Component {
    render() {
        return (
            <div className="time-slider">
                <TimeSlider
                    value={1500}
                    label="Work Time: "
                />
            </div>
        );
    }
}

export default WorkTimeSlider;