import React from 'react';

class PropertiesItem extends React.PureComponent {

    render() {
        return (
            <div>
                <div className="product-title">Properties</div>
                <table>
                    <tbody>
                    <tr>
                        <td>ABV</td>
                        <td>{ this.props.itemObj.abv }</td>
                    </tr>
                    <tr>
                        <td>EBC</td>
                        <td>{ this.props.itemObj.ebc }</td>
                    </tr>
                    <tr>
                        <td>IBU</td>
                        <td>{ this.props.itemObj.ibu }</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PropertiesItem;
