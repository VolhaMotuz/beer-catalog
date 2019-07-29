import React from 'react';
import { connect } from "react-redux";
import { loadBeerItem } from "../../actions/item-action";
import CommonItemDetails from "../../components/childItemPage/commonItemDetails";
import './itemPage.scss';

class ItemPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }

    componentDidMount() {
        this.props.loadBeerItem(this.props.match.params.id);
    }

    render() {
        const { error, isLoading, data } = this.props;
        const item = data[0];
        if (error) {
            return <div>Error: { error.message }</div>;
        } else {
            return (
                <CommonItemDetails itemData={item} isLoading={isLoading} />
            );
        }
    }
}

function mapStateToProps (state) {
    return {
        data: state.itemState.beerItem,
        isLoading: state.commonState.isLoading,
    };
}

export default connect(mapStateToProps, {
    loadBeerItem
})(ItemPage);
