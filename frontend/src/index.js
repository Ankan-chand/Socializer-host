import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast.configure({
//   autoClose: 5000, // Auto close the notification after 5 seconds
//   draggable: false, // Prevent users from dragging the notification
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ToastContainer autoClose={3000} draggable={false} />
      <App />
    </Provider>
  </React.StrictMode>
);
