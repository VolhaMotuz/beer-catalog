import React from 'react';
import Menu from '../menu/menu';
import './header.scss';

class Header extends React.PureComponent {

    render() {
        return (
            <div className="header">
                <div className="container grid--container">
                    <div className="header-content">
                        <Menu />
                        <div className="header-content--title">Beer catalog</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
