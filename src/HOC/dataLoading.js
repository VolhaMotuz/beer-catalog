import React from 'react';
import Preloader from "../components/common/preloader/preloader";

export default function withLoadData(Component) {
    return class loadData extends React.Component {
        isLoading(prop) {
            return !prop || prop.isLoading;
        }

        render() {
            return  <Component {...this.props} />;
        }
    }
}
