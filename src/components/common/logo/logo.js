import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';
import logo from "./logo.svg";

class Logo extends React.PureComponent {

    render() {
        return (
            <div className="logo" style={{width: this.props.width, height: this.props.height}}>
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
        );
    }
}

export default Logo;
