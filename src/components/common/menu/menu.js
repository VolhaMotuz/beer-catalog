import React from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleMenuOn: false};
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(state => ({
            isToggleMenuOn: !state.isToggleMenuOn
        }));
        console.log(this.state.isToggleMenuOn);
    }

    render() {
        return (
            <div className="menu">
                <div className="menu__label" onClick={this.toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={"menu__content " + (this.state.isToggleMenuOn ? 'show' : 'hidden')}>
                    <div className="menu__content_header">
                        <div>Beer catalog</div>
                        <div className="button-close" onClick={this.toggleMenu}>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="menu__content_navigation">
                        <ul>
                            <li onClick={this.toggleMenu}><Link to="/">Home</Link></li>
                            {/*<li><Link to="/favourites">Favourites</Link></li>*/}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
