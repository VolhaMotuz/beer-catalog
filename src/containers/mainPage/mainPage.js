import React, {Fragment} from 'react';
// import InfiniteScroll from 'react-infinite-scroller';
import Preloader from "../../components/common/preloader/preloader";
import PostItem from "../../components/postItem/postItem";
import { connect } from "react-redux";
import { loadBeer, setDefault } from "../../actions/search-actions";
import SearchPanel from '../../components/search/search';
import FilterPanel from '../../components/filter/filter';
// import withDataLoading from "../../HOC/dataLoading";

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            filter: {
                name: '',
                abv: 0,
                ibu: 0,
                ebc: 0,
                pageNumber: 0,
                pageAmount: 25
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

    handleKeyPress = (target) => {
        if (target.charCode === 13) {
            this.props.loadBeer(this.state.filter);
        }
    };

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

    handleFilterValueChange = (attrName, value) => {
        this.setState((prevState) => {
            return  {
                filter: {
                    ...prevState.filter,
                    [attrName]: value
                }}
        });
    };

    handlePageLoader() {
        this.props.loadBeer();
    }

    /**
     *
     * @returns {*}
     */
    render() {
        const { error, filter } = this.state;
        const { isLoading, items } = this.props;
console.log(this.props);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (isLoading) {
            return <Preloader />;
        } else {
            return (
                <Fragment>
                    <SearchPanel
                        onChange={this.handleChangeName}
                        onSubmit={this.handleSubmit}
                        onKeyPress={this.handleKeyPress}
                        value={filter.name}
                        buttonName=""
                    />
                    <FilterPanel
                        abv={filter.abv}
                        ibu={filter.ibu}
                        ebc={filter.ebc}
                        onValueChange={ this.handleFilterValueChange }
                    />
                    {/*<InfiniteScroll
                        className="row"
                        pageStart={0}
                        loadMore={this.handlePageLoader}
                        hasMore={true || false}
                        loader={<div className="loader" key={0}>Loading ...</div>}
                    >*/}
                        {items.map(item => (
                            <PostItem key={item.id}
                                      image={item.image_url}
                                      name={item.name}
                                      tagline={item.tagline}
                                      id={item.id}
                            />
                        ))}
                    {/*</InfiniteScroll>*/}
                </Fragment>
            );
        }
    }
}

function mapStateToProps (state) {
    return {
        items: state.searchState.beerList,
        isLoading: state.commonState.isLoading,
    };
}

export default connect(mapStateToProps, {
    loadBeer,
    setDefault,
})(MainPage);

/*
export default connect(mapStateToProps, {
    loadBeer,
    setDefault,
})(withDataLoading(MainPage));
*/
