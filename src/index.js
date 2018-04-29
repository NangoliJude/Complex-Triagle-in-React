import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App'

const vertices = [
    [0,60],
    [30,0],
    [60,60]
]
ReactDOM.render(
<BrowserRouter>
<svg height="100" width="300" >
   <App vertices={vertices} 
   color="#FF1F58"
   />
</svg>
</BrowserRouter>, document.getElementById("root"));