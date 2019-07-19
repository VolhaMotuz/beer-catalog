import React from 'react';
import Slider from 'react-input-slider';

class Filter extends React.PureComponent {
    // Set default props
    static defaultProps = {
        placeholder: "Search beers...",
        buttonName: "Send"
    };

    handleChangeName = (event) => {
        this.props.onChange(event.target.value);
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
                        onChange={({ x }) => this.setState({ abv: parseFloat(x.toFixed(2)) })}
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
                        onChange={({ x }) => this.setState({ ibu: parseFloat(x.toFixed(2)) })}
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
                        onChange={({ x }) => this.setState({ ebc: parseFloat(x.toFixed(2)) })}
                    />
                </div>
            </div>

        );
    }
}

export default Filter;
