import React from 'react';

class MethodsItem extends React.PureComponent {

    render() {
        return (
            <div>
                <div className="product-title">Method</div>
                <div className="product-properties">
                    { this.props.methodsObj.mash_temp.length > 0 &&
                    <div className="product-properties-method">
                        <div className="title">Mash</div>
                        { this.props.methodsObj.mash_temp.map((item, index) => (
                            <div key={index}>
                                <span className="details">{item.duration} minutes {item.temp.value} {item.temp.unit}</span>
                            </div>
                        ))}
                    </div>
                    }
                    { this.props.methodsObj.fermentation &&
                    <div className="product-properties-method">
                        <div className="title">Fermentation</div>
                        <span className="details">Perform at {this.props.methodsObj.fermentation.temp.value} {this.props.methodsObj.fermentation.temp.unit}</span>
                    </div>
                    }
                    { this.props.methodsObj.twist &&
                    <div className="product-properties-method">
                        <div className="title">Twist</div>
                        <span className="details">{this.props.methodsObj.twist}</span>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default MethodsItem;
