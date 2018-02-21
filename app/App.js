import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/nav/Nav";
import Content from "./layouts/Content";
import HunterCreator from "./pages/HunterCreator";
import HarePage from "./pages/HarePage";
import HunterList from "./pages/HunterList";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { setLang } from './actions';
import { BrowserRouter as Router, Route, IndexRoute, Link, Switch, history } from 'react-router-dom';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';

import messages from './messages';

class App extends React.Component {

    render() {
        const { lang } = this.props;

        return (
            <IntlProvider locale={lang} messages={messages[lang]}>
                <Router>
                    <div className='container'> 
                        <Nav setLang={this.props.setLang} />
                        <Switch>
                            <Route path='/' exact component={HunterCreator} />
                            <Route path='/hunters' exact component={HunterList} />
                            <Route path='/hare-page' exact component={HarePage} />
                        </Switch>
                    </div>
                </Router>
            </IntlProvider>
        )
    }
}

function stateToProps(state) {
    return {
        lang: state.locale.lang,
    }
}

export default connect(stateToProps, {setLang})(App);