import React from 'react';
import './search.scss';

class Search extends React.PureComponent {

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
                <input type="text" placeholder={ this.props.placeholder } onChange={this.handleChangeName} value={this.props.value} />
                <input type="submit" value={this.props.buttonName} onClick={this.props.onSubmit} />
            </div>
        );
    }
}

export default Search;
