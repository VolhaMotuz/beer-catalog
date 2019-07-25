import React from 'react';
import './footer.scss';

export default function Footer({ address, phone, email }) {
    return (
        <div className="footer">
            <div className="container grid--container">
                <div className="row">
                    <div className="footer-column col--xs-12 col--md-6 col--lg-4">
                        {phone.length > 0 &&
                            <p>Phone: {phone}</p>
                        }
                    </div>
                    <div className="footer-column col--xs-12 col--md-6 col--lg-4">
                        {address.length > 0 &&
                            <p>Address: {address}</p>
                        }
                    </div>
                    <div className="footer-column col--xs-12 col--md-6 col--lg-4 text--lg-right">
                        {email.length > 0 &&
                            <p>Email: {email}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
