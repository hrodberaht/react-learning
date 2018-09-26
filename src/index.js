import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import App from "./App";
import { Provider } from 'react-redux';

import { store } from "./store";

const AppWithProvider = () => (
    <Provider store={ store }>
        <App  />
    </Provider>
)

ReactDOM.render(<AppWithProvider />, document.getElementById("root"));
registerServiceWorker();
