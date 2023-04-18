import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useDispatch, useSelector } from "react-redux";

import App from './App';
import { store } from "./store.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
			<App />
		</Provider>
  // </React.StrictMode>
);