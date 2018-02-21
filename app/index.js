import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Nav from "./components/nav/Nav";
import Content from "./layouts/Content";
import HunterCreator from "./pages/HunterCreator";
import HarePage from "./pages/HarePage";
import HunterList from "./pages/HunterList";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { BrowserRouter as Router, Route, IndexRoute, Link, Switch, history } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

require('./style.scss');
require('./components/forms/index.scss');
require('./components/hunters/index.scss');

const store = createStore(reducer);

addLocaleData(en);
addLocaleData(ru);

ReactDOM.render (
    <Provider store={store} history={history}>
        <App />
    </Provider>,
   document.getElementById("app")
);