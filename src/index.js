import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

//domain
// dev-iumhw53x7g7gfk8g.us.auth0.com
// client
// Qxmw9bNODUgAZ8gy5ExtDsl4Kx14zuTU

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-iumhw53x7g7gfk8g.us.auth0.com"
      clientId="Qxmw9bNODUgAZ8gy5ExtDsl4Kx14zuTU"
      redirectUri={window.location.origin}>
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
