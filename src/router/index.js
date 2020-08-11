import React from 'react'
import routes from './config'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
export default () => (
    <Router >
        <Switch>
            {
                routes.map(item =>
                    <Route exact
                        path={item.path}
                        key={item.path}
                        component={item.component} />
                )
            }
        </Switch>
    </Router>
);

