import React, {Fragment} from 'react';
import Preloader from "../../components/common/preloader/preloader";
import PostItem from "../../components/postItem/postItem";
import { apiPostBeerName } from './../../services/api/postsService';

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
        //this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    loadPosts() {
        apiPostBeerName(this.state.value)
            .then(response => {
                console.log(response.data);
                this.setState({
                    isLoaded: true,
                    items: response.data
                });
            })
            .catch(error => {
                //console.log(error);
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
                    <div className="">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" name="name" placeholder="Search beers..."  value={this.state.value} onChange={this.handleChange}/>
                            <input type="submit" value="Отправить" />
                        </form>
                    </div>

                    <div className="row">

                        {items.map(item => (
                            <PostItem key={item.id}
                                      image={item.image_url}
                                      name={item.name}
                                      tagline={item.tagline}
                            />
                        ))}
                    </div>
                </Fragment>
            );
        }
    }
}

export default MainPage;
