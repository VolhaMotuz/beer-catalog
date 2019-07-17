import React from 'react';
import Preloader from "../../components/common/preloader/preloader";
import PostItem from "../../components/postItem/postItem";
import { apiGetPosts } from './../../services/api/postsService';

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
            data: {},
            items: {}
        };
    }

    /**
     *
     */
    componentDidMount() {
        apiGetPosts()
            .then(response => {
                //console.log(response.data);
                this.setState({
                    isLoaded: true,
                    data: response.data,
                    items: response.data.articles
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
                <div className="row">
                    {items.map(item => (
                        <PostItem key={item.title}
                                  image={item.urlToImage}
                                  title={item.title}
                                  url={item.url}
                                  author={item.author}
                                  date={item.publishedAt}
                        />
                    ))}
                </div>
            );
        }
    }
}

export default MainPage;
