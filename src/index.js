import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";
import App from "./App";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

const AppWithProvider = () => (
    <Provider store={ store }>
        <App  />
    </Provider>
)

ReactDOM.render(<AppWithProvider />, document.getElementById("root"));
registerServiceWorker();
