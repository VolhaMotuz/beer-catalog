import React from 'react';
import './pageNotFound.scss';

export default function PageNotFound() {

    return (
        <div className="nf-page">
            <div className="nf-page_error-code">404</div>
            <p className="nf-page_description">Page Not Found</p>
        </div>
    );
}
