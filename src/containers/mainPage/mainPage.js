import React, {Fragment} from 'react';
import Preloader from "../../components/common/preloader/preloader";
import PostItem from "../../components/postItem/postItem";
import {connect} from "react-redux";
import {loadBeer, setDefault} from "../../actions/search-actions";
import SearchPanel from '../../components/search/search';

/**
 *
 */
class MainPage extends React.Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            value: ''
        };
    }

    handleChange = (value) => {
        this.setState({value: value});
    };

    handleSubmit = () => {
        this.props.loadBeer(this.state.value);
    };

    /**
     *
     */
    componentDidMount() {
        //if (this.props.items.length === 0) {
            this.props.loadBeer();
        //}
    }

    componentWillUnmount() {
        //this.props.setDefault();
    }

    /**
     *
     * @returns {*}
     */
    render() {
        const { error } = this.state;
        const { isLoading: isLoaded, items } = this.props;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Preloader />;
        } else {
            return (
                <Fragment>
                    <SearchPanel
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        value={this.state.value}
                    />
                    <div className="row">

                        {items.map(item => (
                            <PostItem key={item.id}
                                      image={item.image_url}
                                      name={item.name}
                                      tagline={item.tagline}
                                      id={item.id}
                            />
                        ))}
                    </div>
                </Fragment>
            );
        }
    }
}

function mapStateToProps (state) {
    return {
        items: state.searchState.beerList,
        isLoading: !state.searchState.isLoading,
    };
}

export default connect(mapStateToProps, {
    loadBeer,
    setDefault,
})(MainPage);
