import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "../src/redux/store/store";
import { Auth0Provider } from "@auth0/auth0-react";
import {BrowserRouter} from "react-router-dom"
import Context from './context/Context'

ReactDOM.render(
  <React.StrictMode>
    <Context>
    <BrowserRouter>
    <Provider store={store}>
      <Auth0Provider
        domain="agwork2304.us.auth0.com"
        clientId="0uyase5gfnpmxY6gWlezSZv5ur1Ye6FZ"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </Provider>
    </BrowserRouter>
    </Context>
   
    
  </React.StrictMode>,
  document.getElementById("root")
);
