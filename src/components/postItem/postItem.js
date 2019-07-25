import React from 'react';
import './postItem.scss';
import { Link } from 'react-router-dom';
import ImageItem from "../childItemPage/imageItem";

export default function PostItem({ id, name, tagline, image }) {

    return (
        <div className="item col--xs-12 col--md-6 col--lg-4">
            <div className="item-card">
                <ImageItem image_url={image} />
                <div className="item-card-info">
                    <div className="item-card-name">{name}</div>
                    <div className="item-card-tagline">{tagline}</div>
                    <div className="item-card-buttons">
                        <Link to={'/items/' + id}>Open</Link>
                        {/*<a className="" href="/">Favourite</a>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}
