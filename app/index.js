import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/nav/Nav";
import Content from "./layouts/Content";
import HunterCreator from "./pages/HunterCreator";
import HarePage from "./pages/HarePage";
import HunterList from "./pages/HunterList";
import HunterPage from "./pages/HunterPage";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { BrowserRouter as Router, Route, IndexRoute, Link, Switch, history } from 'react-router-dom';

require('./style.scss');
require('./components/forms/index.scss');
require('./components/list/index.scss');

const store = createStore(reducer);

ReactDOM.render (
    <Provider store={store} history={history}>
        <Router>
            <div className='container'> 
                <Nav />
                <Switch>
                    <Route path='/' exact component={HunterCreator} />
                    <Route path='/hunters' exact component={HunterList} />
                    <Route path='/hunters-profile' exact component={HunterPage} />
                    <Route path='/hare-page' exact component={HarePage} />
                </Switch>
            </div>
        </Router>
    </Provider>,
   document.getElementById("app")
);