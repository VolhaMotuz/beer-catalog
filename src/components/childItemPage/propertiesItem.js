import React from 'react';

export default function PropertiesItem ({itemObj}) {

    return (
        <div>
            <div className="product-title">Properties</div>
            <table>
                <tbody>
                <tr>
                    <td>ABV</td>
                    <td>{ itemObj.abv }</td>
                </tr>
                <tr>
                    <td>EBC</td>
                    <td>{ itemObj.ebc }</td>
                </tr>
                <tr>
                    <td>IBU</td>
                    <td>{ itemObj.ibu }</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
