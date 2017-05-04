import React, {Component} from 'react';

import IconButton from 'material-ui/IconButton';

import ArrowUpIcon from './icons/ic_keyboard_arrow_up_black_24px.svg';

import './ShowMoreButton.css';

class ShowMoreButton extends Component {
    render() {
        return (
            <div className="settings-button">
                <IconButton>
                    <img src={ArrowUpIcon} alt="settings" />
                </IconButton>
            </div>
        );
    }
}

export default ShowMoreButton;