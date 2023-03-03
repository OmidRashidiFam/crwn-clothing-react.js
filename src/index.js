import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { AuthUserContextProvider } from "./contexts/user-auth-context";
import { ProductContextProvider } from "./contexts/product-context";
import { DropdownContextProvider } from "./contexts/dropdown-context";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <AuthUserContextProvider>
      <ProductContextProvider>
        <DropdownContextProvider>
          <App />
        </DropdownContextProvider>
      </ProductContextProvider>
    </AuthUserContextProvider>
  </Router>
);
