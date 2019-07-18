import React from 'react';

class Search extends React.PureComponent {
    // Set default props
    static defaultProps = {
        placeholder: "Search beers...",
        buttonName: "Send"
    };

    handleChange = (event) => {
      this.props.onChange(event.target.value);
    };

    render() {
        return (
            <div className="search">
                <input type="text" placeholder={ this.props.placeholder } onChange={this.handleChange} value={this.props.value} />
                <input type="submit" value={this.props.buttonName} onClick={this.props.onSubmit} />
            </div>
        );
    }
}

export default Search;
