import React, {Fragment} from 'react';
import Preloader from "../../components/common/preloader/preloader";
import PostItem from "../../components/postItem/postItem";
import { apiPostBeerName } from './../../services/api/postsService';
//import Search from '../../components/search/search';
import {createStore} from 'redux';
//import {Provider} from 'react-redux';
//import reducers from "../../reducers";

//const store = createStore(reducers);
//store.subscribe(() => console.log('store', store.getState()));

/**
 *
 */
class MainPage extends React.Component {

    /**
     *
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            value: ''
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    loadPosts() {
        apiPostBeerName(this.state.value)
            .then(response => {
                this.setState({
                    isLoaded: true,
                    items: response.data
                });
            })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.loadPosts();
    };

    /**
     *
     */
    componentDidMount() {
        this.loadPosts();
    }

    /**
     *
     * @returns {*}
     */
    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <Preloader />;
        } else {
            return (
                <Fragment>
                    <div className="search">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Search beers..."  value={this.state.value} onChange={this.handleChange}/>
                            <input type="submit" value="Send" />
                        </form>
                    </div>

                    <div className="row">

                        {items.map(item => (
                            <PostItem key={item.id}
                                      image={item.image_url}
                                      name={item.name}
                                      tagline={item.tagline}
                                      id={item.id}
                            />
                        ))}
                    </div>
                </Fragment>
            );
        }
    }
}

export default MainPage;
