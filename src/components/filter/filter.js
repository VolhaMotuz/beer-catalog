import React from 'react';
import Slider from 'react-input-slider';
import './filter.scss';
// import FilterItem from "./filterItem";

export default class Filter extends React.PureComponent {

    static defaultProps = {
        attrName: "",
        value: null
    };

    getParams = (attrName, value) => {
        this.attrName = attrName;
        this.value = value;
    };

    handleChange = () => {
        this.props.onValueChange(this.attrName, this.value);
    };

    render() {
        return (
            <div className="filter">
                {/*<FilterItem title={'Alcohol by Volume:'}
                            currentValue={this.props.abv}
                            axis={'x'}
                            xstep={0.1}
                            xmax={5}
                            x={this.props.abv}
                            onChange={({ x }) => this.getParams('abv', parseFloat(x.toFixed(2)))}
                            onDragEnd={this.handleChange}
                />*/}
                <div className="filter-item">
                    <div className="filter-item_title">Alcohol by Volume: </div>
                    <div className="filter-item_content">
                        <span>{this.props.abv}</span>
                        <Slider
                            axis="x"
                            xstep={0.1}
                            xmin={0.1}
                            xmax={5}
                            x={this.props.abv}
                            onChange={({ x }) => this.getParams('abv', parseFloat(x.toFixed(2)))}
                            onDragEnd={this.handleChange}
                        />
                    </div>
                </div>
                <div className="filter-item">
                    <div className="filter-item_title">International Bitterness Units: </div>
                    <div className="filter-item_content">
                        <span>{this.props.ibu}</span>
                        <Slider
                            axis="x"
                            xstep={1}
                            xmin={0}
                            xmax={100}
                            x={this.props.ibu}
                            onChange={({ x }) => this.getParams('ibu', parseFloat(x.toFixed(2)))}
                            onDragEnd={this.handleChange}
                        />
                    </div>
                </div>
                <div className="filter-item">
                    <div className="filter-item_title">Color by EBC: </div>
                    <div className="filter-item_content">
                        <span>{this.props.ebc}</span>
                        <Slider
                            axis="x"
                            xstep={0.5}
                            xmin={0}
                            xmax={20}
                            x={this.props.ebc}
                            onChange={({ x }) => this.getParams('ebc', parseFloat(x.toFixed(2)))}
                            onDragEnd={this.handleChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
