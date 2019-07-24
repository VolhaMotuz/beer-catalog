import React from 'react';

class IngredientItem extends React.PureComponent {

    render() {
        return (
            <div>
                <div className="product-title">Ingredients</div>
                <table className="product-properties">
                    <tbody>
                    { this.props.ingredientsObj.hops.length > 0 &&
                        <tr>
                            <td>
                                <div className="title">Hops</div>
                                {this.props.ingredientsObj.hops.map((item, index) => (
                                    <div key={index}>
                                        <span className="details">"{item.name}" - {item.amount.value} {item.amount.unit}, add when {item.add}</span>
                                    </div>
                                ))}
                            </td>
                        </tr>
                        }
                        { this.props.ingredientsObj.malt.length > 0 &&
                        <tr>
                            <td>
                                <div className="title">Malt</div>
                                {this.props.ingredientsObj.malt.map((item, index) => (
                                    <div key={index}>
                                        <span className="details">"{item.name}" - {item.amount.value} {item.amount.unit}, add when {item.add}</span>
                                    </div>
                                ))}
                            </td>
                        </tr>
                        }
                        { this.props.ingredientsObj.yeast.length > 0 &&
                        <tr>
                            <td>
                                <div className="title">Yeast</div>
                                <span className="details">{ this.props.ingredientsObj.yeast }</span>
                            </td>
                        </tr>
                     }
                     </tbody>
                 </table>
            </div>
        );
    }
}

export default IngredientItem;
