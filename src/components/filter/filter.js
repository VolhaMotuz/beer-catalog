import React from 'react';
import Slider from 'react-input-slider';

class Filter extends React.PureComponent {
    handleChange = (attrName, value) => {
        this.props.onValueChange(attrName, value);
    };

    render() {
        return (
            <div className="filter">
                <div>
                    <div>{'Alcohol by Volume: ' + this.props.abv}</div>
                    <Slider
                        axis="x"
                        xstep={0.1}
                        xmin={0}
                        xmax={5}
                        x={this.props.abv}
                        //onChange={({ x }) => this.setState({ abv: parseFloat(x.toFixed(2)) })}
                        onChange={({ x }) => this.handleChange('abv', parseFloat(x.toFixed(2)) )}
                    />
                </div>
                <div>
                    <div>{'International Bitterness Units: ' + this.props.ibu}</div>
                    <Slider
                        axis="x"
                        xstep={1}
                        xmin={0}
                        xmax={200}
                        x={this.props.ibu}
                        onChange={({ x }) => this.handleChange('ibu', parseFloat(x.toFixed(2)) )}
                    />
                </div>
                <div>
                    <div>{'Color by EBC: ' + this.props.ebc}</div>
                    <Slider
                        axis="x"
                        xstep={0.1}
                        xmin={0}
                        xmax={10}
                        x={this.props.ebc}
                        onChange={({ x }) => this.handleChange('ebc', parseFloat(x.toFixed(2)) )}
                    />
                </div>
            </div>

        );
    }
}

export default Filter;
