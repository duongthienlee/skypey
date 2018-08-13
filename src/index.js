import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import { HashRouter, Route } from "react-router-dom"
const render = () => {
    fancyLog();
    return ReactDOM.render(<HashRouter><Route exact path="/" component={App} /></HashRouter>, document.getElementById("root"));
};

render();
store.subscribe(render);
registerServiceWorker();

function fancyLog() {
    console.log("%c Rendered with 👉 👉👇", "background: purple; color: #fff");
    console.log(store.getState());
}