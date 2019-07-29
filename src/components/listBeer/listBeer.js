import React from 'react';
import PostItem from "../postItem/postItem";
import withDataLoading from "../../HOC/dataLoading";

function ListBeer({ list }) {
    return (
        <div className="row">
            {list.map(item => (
                <PostItem key={item.id}
                          image={item.image_url}
                          name={item.name}
                          tagline={item.tagline}
                          id={item.id}
                />
            ))}
        </div>
    );
}

export default withDataLoading(ListBeer);
