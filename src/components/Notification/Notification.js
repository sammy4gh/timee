import React from 'react';
import {NavLink} from "react-router-dom";

const Notification = (props) => {
    return (
        <div className={'m-2'}>
            <NavLink to={'/'}>Notification</NavLink>
        </div>
    );
}

export default Notification;