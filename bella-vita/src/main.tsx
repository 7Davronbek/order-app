import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import "bootstrap/dist/css/bootstrap.min.css"
import "@/style/main.scss"
import {HashRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
