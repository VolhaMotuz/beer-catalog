import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import ErrorBoundary from "./components/common/errorBoundary/errorBoundary";
import MainPage from './containers/mainPage/mainPage';
import AboutUs from './containers/aboutUs/aboutUs';
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
                  <Route path="/about" component={AboutUs}/>
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

