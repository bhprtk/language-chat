import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';

import Hello from "./components/Hello";
import Main from "./components/Main";


ReactDOM.render(
	<Router history={hashHistory}>
    <Route path="/" component={Main}/>
  </Router>
, document.getElementById('react'));
