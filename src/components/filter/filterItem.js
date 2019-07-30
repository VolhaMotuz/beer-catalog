import React from 'react';
import Slider from 'react-input-slider';
import './filter.scss';

export default class FilterItem extends React.Component {

    render() {
        console.log(this.props);
        return (
            <div className="filter-item">
                <div className="filter-item_title">{this.props.title}</div>
                <div className="filter-item_content">
                    <span>{this.props.x}</span>
                    <Slider
                        axis={this.props.axis}
                        xstep={this.props.xstep}
                        xmin={this.props.xmin}
                        xmax={this.props.xmax}
                        x={this.props.x}
                        onChange={({ x }) => this.props.getParams(this.props.type, parseFloat(x.toFixed(2)))}
                        onDragEnd={this.props.onDragEnd}
                    />
                </div>
            </div>
        );
    }
}
