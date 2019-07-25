import React from 'react';

export default function ImageItem ({image_url}) {

    return (
         image_url ? (
            <div className="product-image" style={{backgroundImage: 'url('+ image_url + ')'}}></div>
        ) : (
            <div className="product-image no-photo"></div>
        )
    );
}