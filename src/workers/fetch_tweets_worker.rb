require 'dotenv/load'
require 'sidekiq'
require 'twitter'
require_relative '../models/tweet'

class FetchTweetsWorker
  include Sidekiq::Worker

  def perform
    Tweet::TOPICS.each do |topic|
      hashtag = "##{topic}"

      twitter.search(hashtag).take(10).each do |object|
        tweet = Tweet.new(
          text: object.text,
          topic: topic,
          username: object.user.name,
          external_id: object.id
        )

        tweet.save
      end
    end
  end

  private

  def twitter
    @client ||= Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV.fetch('TWITTER_CONSUMER_KEY')
      config.consumer_secret     = ENV.fetch('TWITTER_CONSUMER_SECRET')
      config.access_token        = ENV.fetch('TWITTER_ACCESS_TOKEN')
      config.access_token_secret = ENV.fetch('TWITTER_ACCESS_TOKEN_SECRET')
    end
  end
end
