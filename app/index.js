import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/nav/Nav";
import Content from "./layouts/Content";
import Login from "./pages/Login";
import Main from "./pages/Main";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


// Provider - контейнер, в который передается store в качестве атрибута.
// Store, таким образом, прокидывается через все дерево компонентов и доступен внутри
// компонента через this.props.

const store = createStore(reducer);

ReactDOM.render (
    <Provider store={store}>
        <Router>
            <div className='container'> 
                <Nav />
                <Content>
                    <Route path='/' exact component={Login} />
                    <Route path='/main' component={Main} />
                </Content>
            </div>
        </Router>
    </Provider>,
   document.getElementById("app")
);