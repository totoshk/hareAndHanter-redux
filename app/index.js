import React from "react";
import ReactDOM from "react-dom";
import Hare from "./components/Hare";
import Hunter from "./components/Hunter";
import Form from "./components/Form";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';


// Provider - контейнер, в который передается store в качестве атрибута.
// Store, таким образом, прокидывается через все дерево компонентов и доступен внутри
// компонента через this.props.

const store = createStore(reducer);

ReactDOM.render (
    <Provider store={store}>
        <div> 
            <Hare />
            <Hunter />
            <Form />
        </div>
    </Provider>,
   document.getElementById("app")
);