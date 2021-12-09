import React from 'react';
import {useSelector} from "react-redux";

const ProfileImage = (props) => {
    const user = useSelector(state => state.auth)

    return (
        <div className={' p-2 m-2 text-xl '}>
            {user ? user.displayName : 'No name'}
        </div>
    );
}

export default ProfileImage;