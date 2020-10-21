import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './MenuToggle.scss';

const MenuToggle = props => {
    return (
        <FontAwesomeIcon 
            className={props.isOpen ? "MenuToggle open" : "MenuToggle"}
            icon={props.isOpen ? faTimes : faBars}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle;
