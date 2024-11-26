import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import { ModalProvider } from "./context/Modal";
import "./index.css";
import Footer from './components/Footer';
const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <Provider store={store}>
        <App />
        <Footer />
      </Provider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
