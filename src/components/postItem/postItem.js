import React from 'react';
import './postItem.scss';

class PostItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

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
                        <div className="item-card-name">{this.props.title}</div>
                        <a className="button btn-fb" href={this.props.url}>Learn more</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostItem;
