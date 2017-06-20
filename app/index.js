import React from "react";
import ReactDOM from "react-dom";
import Hare from "./components/Hare";
import Hunter from "./components/Hunter";
import Form from "./components/Form";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';


// 3. Инициализируем наш store и при помощи Provider подключаем наш store к приложению.
// Чтобы обеспечить свзяь с редюсером, передаем его в качетсве аргумента в метод createStore.

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