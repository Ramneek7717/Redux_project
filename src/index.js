import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AddTasks from "./App";
import {Provider} from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AddTasks/>
        </Provider>
    </React.StrictMode>
);