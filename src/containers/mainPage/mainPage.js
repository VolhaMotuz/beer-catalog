import React, {Fragment} from 'react';
import Preloader from "../../components/common/preloader/preloader";
import PostItem from "../../components/postItem/postItem";
import {connect} from "react-redux";
import {loadBeer, setDefault} from "../../actions/search-actions";
import SearchPanel from '../../components/search/search';
//import FilterPanel from '../../components/filter/filter'
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
            valueName: '',
            abv: 0,
            ibu: 0,
            ebc: 0
        };
    }


    handleChangeName = (value) => {
        this.setState({valueName: value});
    };

    handleSubmit = () => {
        this.props.loadBeer(this.state.valueName);
    };

    getNewBeerlist = () => {
        console.log(this.state.abv);
        apiPostBeerList(this.state.abv).then(res => {
            console.log(res.data);
        })
    }

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
                        onChange={this.handleChangeName}
                        onSubmit={this.handleSubmit}
                        value={this.state.valueName}
                    />

                    <div className="filter">
                        <div>
                            <div>{'Alcohol by Volume: ' + this.state.abv}</div>
                            <Slider
                                axis="x"
                                xstep={0.1}
                                xmin={0}
                                xmax={5}
                                x={this.state.abv}
                                onChange={({ x }) => this.setState({ abv: parseFloat(x.toFixed(2)) })}
                                onDragEnd={this.getNewBeerlist}
                            />
                        </div>
                        <div>
                            <div>{'International Bitterness Units: ' + this.state.ibu}</div>
                            <Slider
                                axis="x"
                                xstep={1}
                                xmin={0}
                                xmax={200}
                                x={this.state.ibu}
                                onChange={({ x }) => this.setState({ ibu: parseFloat(x.toFixed(2)) })}
                            />
                        </div>
                        <div>
                            <div>{'Color by EBC: ' + this.state.ebc}</div>
                            <Slider
                                axis="x"
                                xstep={0.1}
                                xmin={0}
                                xmax={10}
                                x={this.state.ebc}
                                onChange={({ x }) => this.setState({ ebc: parseFloat(x.toFixed(2)) })}
                            />
                        </div>
                    </div>

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
