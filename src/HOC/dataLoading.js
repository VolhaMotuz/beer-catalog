import React from 'react';
import Preloader from "../components/common/preloader/preloader";

const withLoadData = Component => ({ isLoading, ...props }) => {

    if (isLoading) {
        return <Preloader />
    } else {
        return (
            <div>
                <Component {...props} />
            </div>
        )
    }
};

export default withLoadData;
