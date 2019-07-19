import React from 'react';

class Search extends React.PureComponent {
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
            <div className="search">
                <div>
                    <input type="text" placeholder={ this.props.placeholder } onChange={this.handleChangeName} value={this.props.value} />
                    <input type="submit" value={this.props.buttonName} onClick={this.props.onSubmit} />
                </div>

            </div>
            
        );
    }
}

export default Search;
