import { injectable } from "inversify"
import { Client } from "../utils/client"
import { Tweet, TweetTopic } from "../models/tweet"

@injectable()
export class DataService {
  private tweets: Tweet[]

  private client: Client

  constructor(client: Client) {
    this.tweets = []

    this.client = client
  }

  public async getTweets(topic: TweetTopic): Promise<Tweet[]> {
    return (this.tweets = await this.client.getTweets(topic))
  }
}
