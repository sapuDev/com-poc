import React from "react";
import { Router as ReactRouter, Route, Switch } from "react-router";

import { history } from "../helpers/history";

import LayoutComponent from "../components/navigation";
import IndividualGreetings from "../containers/greetings/individualGreetings";

const Routes = [
    <LayoutComponent>
        <ReactRouter history={history}>
            <Switch>
                <Route exact path="/" component={IndividualGreetings} />
                <Route path="/a" component={IndividualGreetings} />
            </Switch>
        </ReactRouter>
    </LayoutComponent>,
];

export default Routes;
