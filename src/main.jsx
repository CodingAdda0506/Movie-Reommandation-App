import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import store from "./app/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Once store is created, make it available to components by adding it in provider around app and passing as a prop
  <Provider store={store}>
    {/* <Navbar /> */}
    <App />
  </Provider>,
);
