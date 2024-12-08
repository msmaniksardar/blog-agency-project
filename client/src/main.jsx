
import { createRoot } from 'react-dom/client'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './assets/css/index.css'
import App from './App.jsx'
import {Provider} from "react-redux";
import store from './store';
import {Toaster } from "sonner"


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <Toaster position="top-right" />
    <App />
  </Provider>,
)
