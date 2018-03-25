import { Base } from "./base"
import { Expose } from "class-transformer"

export enum TweetTopic {
  Nasa = "nasa",
  Healthcare = "healthcare",
  Opensource = "opensource"
}

export class Tweet extends Base  {

  @Expose()
  public text: string

  @Expose()
  public topic: TweetTopic

  @Expose()
  public username: string

  @Expose({ name: "external_id" })
  public externalId: Number

}
