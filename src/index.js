import ReactDOM from 'react-dom'
import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// ReactDOM.render(<App/>, document.querySelector("#root"));
// const container = document.getElementById('app');
// const root = createRoot(container);
// createRoot.render(<App tab="#root" />);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// reportWebVitals();