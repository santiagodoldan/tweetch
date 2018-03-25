import * as React from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { Tweet, TweetTopic } from "../../models/tweet"
import { DataService } from "../../services/data_service"
import { inject } from "../../utils/ioc"

interface IDashboardState {
  topic: TweetTopic
  tweets: Tweet[]
}

interface IDashboardProp {
  location?: Location
}

class Dashboard extends React.Component<RouteComponentProps<IDashboardProp>, IDashboardState> {
  @inject(DataService)
  private dataService: DataService

  constructor(props: RouteComponentProps<IDashboardProp>) {
    super(props)

    this.state = {
      topic: TweetTopic.Nasa,
      tweets: [],
    }
  }

  public async componentDidMount() {
    const tweets = await this.dataService.getTweets(this.state.topic)

    this.setState({ tweets })
  }

  public render() {
    return (
      <div>
        <h1>Tweets</h1>

        <div>
          {
            this.state.tweets.map((tweet) => {
              return (
                <div>{ tweet.text }</div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Dashboard)
