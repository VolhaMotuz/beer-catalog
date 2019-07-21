import React from 'react';

class IngredientItem extends React.PureComponent {
    render() {
        return (
            <div >
                <h4>{this.props.title}</h4>
                <p>{this.props.value}</p>

            </div>
        );
    }
}

export default IngredientItem;
