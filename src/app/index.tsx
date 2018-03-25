import * as React from "react"
import * as ReactDOM from "react-dom"
import "reflect-metadata"
import { Routes } from "./routes"

// import "./styles/main.scss"

export class AppContainer extends React.Component {
  public render() {
    return <Routes />
  }
}

ReactDOM.render(
  <AppContainer />,
  document.getElementById("app"),
)
