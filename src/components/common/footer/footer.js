import React from 'react';
import './footer.scss';

class Footer extends React.PureComponent {
    render() {
        return (
            <div className="footer">
                <div className="container grid--container">
                    <div className="row">
                        <div className="footer-column col--xs-12 col--md-6 col--lg-4">
                            Telephone: +176364748344
                        </div>
                        <div className="footer-column col--xs-12 col--md-6 col--lg-4">
                            Address: 1810 NE 144th St, North Miami, Florida
                        </div>
                        <div className="footer-column col--xs-12 col--md-6 col--lg-4 text--lg-right">
                            Email: bitcoin@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
