import React from 'react';

export default function IngredientItem ({ingredientsObj}) {

    return (
        <div>
            <div className="product-title">Ingredients</div>
            <table className="product-properties">
                <tbody>
                { ingredientsObj.hops.length > 0 &&
                    <tr>
                        <td>
                            <div className="title">Hops</div>
                            {ingredientsObj.hops.map((item, index) => (
                                <div key={index}>
                                    <span className="details">"{item.name}" - {item.amount.value} {item.amount.unit}, add when {item.add}</span>
                                </div>
                            ))}
                        </td>
                    </tr>
                    }
                    { ingredientsObj.malt.length > 0 &&
                    <tr>
                        <td>
                            <div className="title">Malt</div>
                            {ingredientsObj.malt.map((item, index) => (
                                <div key={index}>
                                    <span className="details">"{item.name}" - {item.amount.value} {item.amount.unit}, add when {item.add}</span>
                                </div>
                            ))}
                        </td>
                    </tr>
                    }
                    { ingredientsObj.yeast.length > 0 &&
                    <tr>
                        <td>
                            <div className="title">Yeast</div>
                            <span className="details">{ ingredientsObj.yeast }</span>
                        </td>
                    </tr>
                 }
                 </tbody>
             </table>
        </div>
    );
}
