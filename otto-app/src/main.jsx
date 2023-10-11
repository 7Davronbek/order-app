import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/main.scss";

import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store} >
    <App />
  </Provider>
);
