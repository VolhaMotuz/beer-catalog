import React, {Fragment} from 'react';
import Preloader from "../../components/common/preloader/preloader";
import PostItem from "../../components/postItem/postItem";
import {connect} from "react-redux";
import {loadBeer, setDefault} from "../../actions/search-actions";
import SearchPanel from '../../components/search/search';
import FilterPanel from '../../components/filter/filter'
import Slider from 'react-input-slider';
import { apiPostBeerList } from '../../services/api/postsService';


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
            filter: {
                name: '',
                abv: 0,
                ibu: 0,
                ebc: 0
            },
        };
    }

    handleChangeName = (value) => {
        this.setState((prevState) => {
            return {filter: {
                ...prevState.filter,
                name: value
            }};
        });
    };

    handleSubmit = () => {
        this.props.loadBeer(this.state.filter);
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.isFilterChanged(prevState)) {
            this.props.loadBeer(this.state.filter);
        }
    }

    isFilterChanged(prevState) {
        const { ibu, ebc, abv } = this.state.filter;

        if (prevState.filter.ibu !== ibu) {
            return true;
        }

        if (prevState.filter.ebc !== ebc) {
            return true;
        }

        return prevState.filter.abv !== abv;
    }

    /**
     *
     * @param attrName
     * @param value
     */
    handleFilterValueChange = (attrName, value) => {
        this.setState((prevState) => {
            return  {
                filter: {
                    ...prevState.filter,
                    [attrName]: value
                }}
        });
    };

    /**
     *
     * @returns {*}
     */
    render() {
        const { error, filter } = this.state;
        const { isLoading: isLoaded, items } = this.props;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Preloader />;
        } else {
            return (
                <Fragment>
                    <SearchPanel
                        onChange={this.handleChangeName}
                        onSubmit={this.handleSubmit}
                        value={filter.name}
                    />
                    <FilterPanel
                        abv = {filter.abv}
                        ibu = {filter.ibu}
                        ebc = {filter.ebc}
                        onValueChange={ this.handleFilterValueChange }
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
