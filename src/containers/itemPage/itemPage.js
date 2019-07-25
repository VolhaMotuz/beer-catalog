import React from 'react';
import Preloader from "../../components/common/preloader/preloader";
import { apiGetBeerItem } from './../../services/api/postsService';
import IngredientItem from "../../components/childItemPage/ingredientItem";
import MethodsItem from "../../components/childItemPage/MethodsItem";
import FoodPairingItem from "../../components/childItemPage/foodPairingItem";
import PropertiesItem from "../../components/childItemPage/propertiesItem";
import ImageItem from "../../components/childItemPage/imageItem";
import './itemPage.scss';

export default class ItemPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
        };
    }

    componentDidMount() {
        apiGetBeerItem( this.props.match.params.id)
            .then(response => {
                this.setState({
                    isLoaded: true,
                    data: response.data,
                });
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }

    render() {
        const { error, isLoaded, data } = this.state;
        const item = data[0];
        if (error) {
            return <div>Error: { error.message }</div>;
        } else if (!isLoaded) {
            return <Preloader />;
        } else {
            return (
                <div className="product">
                    <div className="row product-row">
                        <div className="column col--xs-12 col--md-6 col--lg-8">
                            <div className="product-name">{item.name}</div>
                            <div className="product-tagline">{item.tagline}</div>
                            {/*<a href="/" className="button btn-fb">Add to favourites</a>*/}
                            <div className="product-description">{item.description}</div>
                        </div>
                        <div className="column col--xs-12 col--md-6 col--lg-4">
                            <ImageItem image_url={item.image_url} />
                        </div>
                    </div>
                    <div className="row product-row">
                        <div className="column col--xs-12 col--md-6 col--lg-4">
                            <PropertiesItem itemObj={item} />
                        </div>
                        <div className="column col--xs-12 col--md-6 col--lg-4">
                            <FoodPairingItem foodPairingObj={item.food_pairing} />
                        </div>
                    </div>
                    <div className="row product-row">
                        <div className="column col--xs-12 col--md-12 col--lg-12">
                            <div className="product-title">Brewing</div>
                            <div>{ item.brewers_tips }</div>
                        </div>
                    </div>
                    <div className="row product-row">
                        <div className="column col--xs-12 col--md-6 col--lg-3">
                            <IngredientItem ingredientsObj={item.ingredients} />
                        </div>
                        <div className="column col--xs-12 col--md-6 col--lg-3">
                            <MethodsItem methodsObj={item.method} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}
