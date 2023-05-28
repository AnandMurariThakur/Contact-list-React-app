import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { App } from "./components";
import { ToastProvider } from "react-toast-notifications";
import { ContactsProvider } from "./providers";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Create a root element for rendering the React application

// Render the application using React's StrictMode
root.render(
  <React.StrictMode>
    {/* ToastProvider is used for displaying notifications */}
    <ToastProvider
      autoDismiss={true}
      autoDismissTimeout={5000}
      placement={"top-left"}
    >
      {/* ContactsProvider is used to handle the global state of contacts */}
      <ContactsProvider>
        {/* App is the root file of the application where react-router-dom is implemented */}
        <App />
      </ContactsProvider>
    </ToastProvider>
  </React.StrictMode>
);
