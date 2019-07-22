import React, {Fragment} from 'react';
import Preloader from "../../components/common/preloader/preloader";
import { apiGetBeerItem } from './../../services/api/postsService';
import './itemPage.scss'
import IngredientItem from "./child/ingredientItem";

class ItemPage extends React.Component {

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
                console.log(response.data);
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
                            { item.image_url ? (
                                <div className="product-image" style={{backgroundImage: 'url('+ item.image_url + ')'}}></div>
                            ) : (
                                <div className="product-image no-photo"></div>
                            )}
                        </div>
                    </div>
                    <div className="row product-row">
                        <div className="column col--xs-12 col--md-6 col--lg-4">
                            <div className="product-title">Properties</div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>ABV</td>
                                        <td>{ item.abv }</td>
                                    </tr>
                                    <tr>
                                        <td>EBC</td>
                                        <td>{ item.ebc }</td>
                                    </tr>
                                    <tr>
                                        <td>IBU</td>
                                        <td>{ item.ibu }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="column col--xs-12 col--md-6 col--lg-4">
                            <div className="product-title">Food Pairing</div>
                            <table>
                                <tbody>
                                    { item.food_pairing.map(item => (
                                        <tr key={ item }>
                                            <td>{ item }</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
                            <div className="product-title">Ingredients</div>
                            <table className="product-properties">

                                <tbody>
                                { item.ingredients.hops.length > 0 &&
                                <tr>
                                    <td>
                                        <div className="title">Hops</div>
                                        {item.ingredients.hops.map((item, index) => (
                                            <div key={index}>
                                                <span className="details">"{item.name}" - {item.amount.value} {item.amount.unit}, add when {item.add}</span>
                                            </div>
                                        ))}
                                    </td>
                                </tr>
                                }
                                { item.ingredients.malt.length > 0 &&
                                <tr>
                                    <td>
                                        <div className="title">Malt</div>
                                        {item.ingredients.malt.map((item, index) => (
                                            <div key={index}>
                                                <span className="details">"{item.name}" - {item.amount.value} {item.amount.unit}, add when {item.add}</span>
                                            </div>
                                        ))}
                                    </td>
                                </tr>
                                }
                                { item.ingredients.yeast.length > 0 &&
                                <tr>
                                    <td>
                                        <div className="title">Yeast</div>
                                        <span className="details">{ item.ingredients.yeast }</span>
                                    </td>
                                </tr>
                                }
                                </tbody>
                            </table>
                        </div>
                        <div className="column col--xs-12 col--md-6 col--lg-3">
                            <div className="product-title">Method</div>
                            <div className="product-properties">
                                { item.method.mash_temp.length > 0 &&
                                <div className="product-properties-method">
                                    <div className="title">Mash</div>
                                    {item.method.mash_temp.map((item, index) => (
                                        <div key={index}>
                                            <span className="details">{item.duration} minutes {item.temp.value} {item.temp.unit}</span>
                                        </div>
                                    ))}
                                </div>
                                }
                                { item.method.fermentation &&
                                <div className="product-properties-method">
                                    <div className="title">Fermentation</div>
                                    <span className="details">Perform at {item.method.fermentation.temp.value} {item.method.fermentation.temp.unit}</span>
                                </div>
                                }
                                { item.method.twist &&
                                <div className="product-properties-method">
                                    <div className="title">Twist</div>
                                    <span className="details">{item.method.twist}</span>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default ItemPage;
