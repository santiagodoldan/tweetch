import * as React from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"

export interface ILayoutProps {
  // FIXME: This shouldn't be optional. https://github.com/DefinitelyTyped/DefinitelyTyped/pull/21329
  history?: History
}

class Layout extends React.Component<RouteComponentProps<ILayoutProps>> {
  public render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

const LayoutWithRouter = withRouter(Layout)

export function withDefaultLayout(Component: React.ComponentClass) {
  return (
    <LayoutWithRouter>
      <Component />
    </LayoutWithRouter>
  )
}

export default LayoutWithRouter
