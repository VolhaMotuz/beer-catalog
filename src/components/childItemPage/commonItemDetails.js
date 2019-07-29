import React from 'react';
import withDataLoading from "../../HOC/dataLoading";
import IngredientItem from "./ingredientItem";
import MethodsItem from "./MethodsItem";
import FoodPairingItem from "./foodPairingItem";
import PropertiesItem from "./propertiesItem";
import ImageItem from "./imageItem";

function CommonItemDetails({ itemData }) {
    return (
        <div className="product">
            <div className="row product-row">
                <div className="column col--xs-12 col--md-6 col--lg-8">
                    <div className="product-name">{itemData.name}</div>
                    <div className="product-tagline">{itemData.tagline}</div>
                    {/*<a href="/" className="button btn-fb">Add to favourites</a>*/}
                    <div className="product-description">{itemData.description}</div>
                </div>
                <div className="column col--xs-12 col--md-6 col--lg-4">
                    <ImageItem image_url={itemData.image_url} />
                </div>
            </div>
            <div className="row product-row">
                <div className="column col--xs-12 col--md-6 col--lg-4">
                    <PropertiesItem itemObj={itemData} />
                </div>
                <div className="column col--xs-12 col--md-6 col--lg-4">
                    <FoodPairingItem foodPairingObj={itemData.food_pairing} />
                </div>
            </div>
            <div className="row product-row">
                <div className="column col--xs-12 col--md-12 col--lg-12">
                    <div className="product-title">Brewing</div>
                    <div>{ itemData.brewers_tips }</div>
                </div>
            </div>
            <div className="row product-row">
                <div className="column col--xs-12 col--md-6 col--lg-3">
                    <IngredientItem ingredientsObj={itemData.ingredients} />
                </div>
                <div className="column col--xs-12 col--md-6 col--lg-3">
                    <MethodsItem methodsObj={itemData.method} />
                </div>
            </div>
        </div>
    );
}

export default withDataLoading(CommonItemDetails);
