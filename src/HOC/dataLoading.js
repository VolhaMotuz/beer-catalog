import React from 'react';
import Preloader from "../components/common/preloader/preloader";

function loadData(Component) {
    return class loadData extends React.Component {
        state = { hovering: false }
        mouseOver = () => this.setState({ hovering: true })
        mouseOut = () => this.setState({ hovering: false })
        render() {

            return (
                <div></div>
            );
        }
    }
}