import React from 'react';
import Menu from '../menu/menu';
import './header.scss';

export default function Header({ title }) {

    return (
        <div className="header">
            <div className="container grid--container">
                <div className="header-content">
                    <Menu title={title} />
                    <div className="header-content--title">{title}</div>
                </div>
            </div>
        </div>
    );
}
