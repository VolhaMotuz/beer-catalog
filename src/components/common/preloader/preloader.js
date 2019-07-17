import React from 'react';
import './preloader.scss';
import Logo from "../logo/logo";

class Preloader extends React.PureComponent {
    render() {
        return <div className="preloader"><div className="logo-rotate"><Logo width={'200px'} height={'200px'}/></div></div>;
    }
}

export default Preloader;
