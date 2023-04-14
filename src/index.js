import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { AuthUserContextProvider } from "./contexts/user-auth-context";
import { CategoriesContextProvider } from "./contexts/categories-context";
import { DropdownContextProvider } from "./contexts/card-dropdown-context";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthUserContextProvider>
      <CategoriesContextProvider>
        <DropdownContextProvider>
          <App />
        </DropdownContextProvider>
      </CategoriesContextProvider>
    </AuthUserContextProvider>
  </Router>
);
