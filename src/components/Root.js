import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from "./App";
import Join from "./Join";

const Root = ()=> (
    
    <div>
        <Router>
            <Route exact path="/" component={App} />
            <Route path="/join" component={Join} />
        </Router>
    </div>
)
export default Root