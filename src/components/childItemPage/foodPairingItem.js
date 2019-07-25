import React from 'react';

export default function FoodPairingItem ({foodPairingObj}) {

    return (
        <div>
            <div className="product-title">Food Pairing</div>
            <table>
                <tbody>
                { foodPairingObj.map(item => (
                    <tr key={ item }>
                        <td>{ item }</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
