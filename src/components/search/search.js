import React from 'react';
import './search.scss';

export default class Search extends React.PureComponent {

    static defaultProps = {
        placeholder: "Search beers...",
        buttonName: "Send"
    };

    handleChangeName = (event) => {
      this.props.onChange(event.target.value);
    };

    render() {
        return (
            <div className="search">
                <input type="text" placeholder={ this.props.placeholder } onChange={this.handleChangeName} onKeyPress={this.props.onKeyPress} value={this.props.value} />
                <input type="submit" value={this.props.buttonName} onClick={this.props.onSubmit} />
            </div>
        );
    }
}
