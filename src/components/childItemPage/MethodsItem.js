import React from 'react';

export default function MethodsItem ({methodsObj}) {

    return (
        <div>
            <div className="product-title">Method</div>
            <div className="product-properties">
                { methodsObj.mash_temp.length > 0 &&
                <div className="product-properties-method">
                    <div className="title">Mash</div>
                    { methodsObj.mash_temp.map((item, index) => (
                        <div key={index}>
                            <span className="details">{item.duration} minutes {item.temp.value} {item.temp.unit}</span>
                        </div>
                    ))}
                </div>
                }
                { methodsObj.fermentation &&
                <div className="product-properties-method">
                    <div className="title">Fermentation</div>
                    <span className="details">Perform at {methodsObj.fermentation.temp.value} {methodsObj.fermentation.temp.unit}</span>
                </div>
                }
                { methodsObj.twist &&
                <div className="product-properties-method">
                    <div className="title">Twist</div>
                    <span className="details">{methodsObj.twist}</span>
                </div>
                }
            </div>
        </div>
    );
}
