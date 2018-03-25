import * as React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Dashboard from "./components/dashboard"
import NotFound from "./components/not_found"

export class Routes extends React.Component {
  public render() {
    return  (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/tweets" component={Dashboard} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}
