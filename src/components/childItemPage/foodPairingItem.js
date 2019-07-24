import React from 'react';

class FoodPairingItem extends React.PureComponent {

    render() {
        return (
            <div>
                <div className="product-title">Food Pairing</div>
                <table>
                    <tbody>
                    { this.props.foodPairingObj.map(item => (
                        <tr key={ item }>
                            <td>{ item }</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FoodPairingItem;
