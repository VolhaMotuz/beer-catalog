import React from 'react';
import './preloader.scss';
import Logo from "../logo/logo";

export default function Preloader () {
    return (
        <div className="preloader">
            <div className="logo-rotate"><Logo width={'200px'} height={'200px'}/></div>
        </div>
    );
}
