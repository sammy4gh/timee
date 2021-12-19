import React from 'react';
import {useSelector} from "react-redux";

const ProfileImage = () => {
    const auth = useSelector(state => state.auth)

    return (
        <div className={'p-2 m-2 rounded-full bg-black text-white '}>
            { auth && auth.displayName[0]}
        </div>
    );
}

export default ProfileImage;