import React, {Component} from 'react';

import Toggle from 'material-ui/Toggle';

import WorkTimeSlider from './WorkTimeSlider';
import BreakTimeSlider from './BreakTimeSlider';

import './ControlPanel.css';

class ControlPanel extends Component {
    render() {
        return (
            <div className="control-panel">
                <WorkTimeSlider />
                <BreakTimeSlider />
                <Toggle label="Notification Sound" />
            </div>
        );
    }
}

export default ControlPanel;