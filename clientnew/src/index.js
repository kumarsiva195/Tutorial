import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import allReducers from "./redux/reducers/allReducers";
import * as serviceWorker from "./serviceWorker";

let store = createStore(allReducers);

//rendering to dom
ReactDOM.render(
  <Provider store={store}>
		<App />,
	</Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
