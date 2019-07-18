import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import ErrorBoundary from "./components/common/errorBoundary/errorBoundary";
import MainPage from './containers/mainPage/mainPage';
import ItemPage from './containers/itemPage/itemPage';
import Favourites from './containers/favourites/favourites';
import PageNotFound from './containers/pageNotFound/pageNotFound';
import './styles/style.scss';

class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="wrapper">
            <Header />
            <div className="container grid--container content">
              <ErrorBoundary>
                <Switch>
                  <Route exact path="/" component={MainPage}/>
                  <Route path="/items/:id" component={ItemPage}/>
                  <Route path="/favourites" component={Favourites}/>
                  <Route component={PageNotFound}/>
                </Switch>
              </ErrorBoundary>
            </div>
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;

