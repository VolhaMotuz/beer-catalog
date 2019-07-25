import React from 'react';
import { Link } from 'react-router-dom';
import './logo.scss';
import logo from "./logo.svg";

export default function Logo ({ width, height }) {

    return (
        <div className="logo" style={{width: width, height: height}}>
            <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
    );
}
