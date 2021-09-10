import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";

const app = (
    <>
        <CssBaseline/>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
);

ReactDOM.render( app,document.getElementById('root'));

