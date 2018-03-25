import * as qs from "qs"
import { plainToClass } from "class-transformer"
import { Tweet, TweetTopic } from "../models/tweet"

type Method = "GET" | "POST" | "PUT"

interface IRequestOptions {
  path: string
  body?: any
  query?: any
}

export class Client {
  public host = process.env.API_HOST;

  public getTweets(topic: TweetTopic): Promise<Tweet[]> {
    return this.request("GET", {
      path: "/api/v1/tweets",
      query: { topic }
    })
    .then((r) => parseResponse(r, Tweet))
  }

  private request(method: Method, options: IRequestOptions): Promise<Response> {
    const url = this.host + options.path + "?" + qs.stringify(options.query)

    return fetch(url, { method })
  }

}

function parseResponse(response: Response, klass?: any) {
  return response.json().then((x) => {
    if (response.status >= 200 && response.status < 300) {
      if (klass) {
        return plainToClass(klass, x)
      } else {
        return x
      }
    } else {
      throw new Error(x.message)
    }
  })
}
