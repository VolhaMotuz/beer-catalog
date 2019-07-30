import React from 'react';
import Slider from 'react-input-slider';
import './filter.scss';
import FilterItem from "./filterItem";

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
                <FilterItem title={'Alcohol by Volume:'}
                            type={'abv'}
                            axis={'x'}
                            xstep={0.1}
                            xmin={0}
                            xmax={5}
                            x={this.props.abv}
                            getParams={this.getParams}
                            onDragEnd={this.handleChange}
                />
                <FilterItem title={'International Bitterness Units:'}
                            type={'ibu'}
                            axis={'x'}
                            xstep={1}
                            xmin={0}
                            xmax={100}
                            x={this.props.ibu}
                            getParams={this.getParams}
                            onDragEnd={this.handleChange}
                />
                <FilterItem title={'Color by EBC:'}
                            type={'ebc'}
                            axis={'x'}
                            xstep={0.5}
                            xmin={0}
                            xmax={20}
                            x={this.props.ebc}
                            getParams={this.getParams}
                            onDragEnd={this.handleChange}
                />
            </div>
        );
    }
}
