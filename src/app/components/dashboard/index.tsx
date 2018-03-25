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

    this.fetchTweets = this.fetchTweets.bind(this)
  }

  public async componentDidMount() {
    const tweets = await this.dataService.getTweets(this.state.topic)

    this.setState({ tweets })
  }

  public async fetchTweets(topic: TweetTopic) {
    const tweets = await this.dataService.getTweets(topic)

    this.setState({ tweets, topic })
  }

  public topicClasses(topic: TweetTopic) {
    let classes = ["btn"]

    if (topic === this.state.topic) {
      classes.push("btn-success")
    } else {
      classes.push("btn-default")
    }

    return classes.join(" ")
  }

  public render() {
    return (
      <div>
        <h1>Tweets</h1>
        <br />

        <div className="row">
          <div className="btn-pull-left">
            <a className={ this.topicClasses(TweetTopic.Nasa) } onClick={ () => this.fetchTweets(TweetTopic.Nasa) }>Nasa</a>
          </div>
          <div className="btn-pull-left">
            <a className={ this.topicClasses(TweetTopic.Healthcare) } onClick={ () => this.fetchTweets(TweetTopic.Healthcare) }>Healthcare</a>
          </div>
          <div className="btn-pull-left">
            <a className={ this.topicClasses(TweetTopic.Opensource) } onClick={ () => this.fetchTweets(TweetTopic.Opensource) }>Opensource</a>
          </div>
        </div>

        <br />
        <br />

        <div>
          {
            this.state.tweets.map((tweet) => {
              return (
                <div className="panel panel-info">
                  <div className="panel-heading">
                    <h3 className="panel-title">{ tweet.username }</h3>
                  </div>
                  <div className="panel-body">
                    { tweet.text }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Dashboard)
