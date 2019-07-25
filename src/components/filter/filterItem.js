import React from 'react';
// import Slider from 'react-input-slider';
import './filter.scss';

export default class FilterItem extends React.Component {

    render() {
        return (
            <div className="filter-item">
                <div className="filter-item_title">{this.props.title}</div>
                <div className="filter-item_content">
                    <span>{this.props.currentValue}</span>

                    {/*<Slider
                        axis={this.props.axis}
                        xstep={this.props.xstep}
                        xmin={this.props.xmin}
                        xmax={this.props.xmax}
                        x={this.props.x}
                        onChange={this.props.onCange}
                        onDragEnd={this.props.onDragEnd}
                    />*/}
                </div>
            </div>
        );
    }
}
