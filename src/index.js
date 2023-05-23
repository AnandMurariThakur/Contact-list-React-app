import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { App } from "./components";
import { ToastProvider } from "react-toast-notifications";
import { ContactsProvider } from "./providers";

const root = ReactDOM.createRoot(document.getElementById("root"));

//added ToastProvider which we are using for the notification
//ContactsProvider is used to handle the the global state of contact
//App is our root file of application where we have implemented the react-route-dom

root.render(
  <React.StrictMode>
    <ToastProvider
      autoDismiss={true}
      autoDismissTimeout={5000}
      placement={"top-left"}
    >
      <ContactsProvider>
        <App />
      </ContactsProvider>
    </ToastProvider>
  </React.StrictMode>
);
