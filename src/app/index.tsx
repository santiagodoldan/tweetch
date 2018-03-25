import * as React from "react"
import * as ReactDOM from "react-dom"
import "reflect-metadata"
import "bootstrap"

import "./styles/main.scss"

import { Routes } from "./routes"

export class AppContainer extends React.Component {
  public render() {
    return (
      <div className="container">
        <Routes />
      </div>
    )
  }
}

ReactDOM.render(
  <AppContainer />,
  document.getElementById("app"),
)
