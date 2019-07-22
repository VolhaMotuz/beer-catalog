import React from 'react';
import './postItem.scss';
import { Link } from 'react-router-dom';

class PostItem extends React.Component {

    render() {
        return (
            <div className="item col--xs-12 col--md-6 col--lg-4">
                <div className="item-card">

                    {this.props.image ? (
                        <div className="item-card-image" style={{backgroundImage: 'url('+ this.props.image + ')'}}></div>
                    ) : (
                        <div className="item-card-image no-photo"></div>
                    )}

                    <div className="item-card-info">
                        <div className="item-card-name">{this.props.name}</div>
                        <div className="item-card-tagline">{this.props.tagline}</div>
                        <div className="item-card-buttons">
                            <Link to={'/items/' + this.props.id}>Open</Link>
                            {/*<a className="" href="/">Favourite</a>*/}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostItem;
