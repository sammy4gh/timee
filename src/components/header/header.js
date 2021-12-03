import React from 'react';
import Nav from "./nav";
import Logo from "./logo";

const Header = (props) => {
    return (
        <div className={ 'header bg-white fixed  px-4 py-8 m-0 font-bold  w-full flex items-center justify-between'}>
            <Logo/>
            <Nav/>
        </div>
    );
}

export default Header;