import React from 'react';
import ProfileImage from "./profileImage";
import {useSelector} from "react-redux";

const User = (props) => {
    const auth = useSelector(state => state.auth)

    return (
        <div className={'flex items-center '}>
            <ProfileImage/>
            <div className={'lg:hidden flex flex-col justify-between items-start'}>
                <div >
                    { auth && auth.displayName}
                </div>
                <div className={'text-xs font-normal'}>
                    { auth && auth.email}
                </div>
            </div>
        </div>
    );
}

export default User;