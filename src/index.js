import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store/store.js";
import { CategoriesContextProvider } from "./contexts/categories.context";
import { DropdownContextProvider } from "./contexts/card.context";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <CategoriesContextProvider>
        <DropdownContextProvider>
          <App />
        </DropdownContextProvider>
      </CategoriesContextProvider>
    </Provider>
  </Router>
);
