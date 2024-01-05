import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {HashRouter} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css"
import 'react-toastify/dist/ReactToastify.css';
import "@/style/main.scss"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
