require 'json'
require 'sinatra'
require "sinatra/json"
require_relative '../models/tweet'

set :bind, '0.0.0.0'

get '/api/v1/tweets.json', provides: :json do
  topic  = params[:topic] || Tweet::TOPICS.first
  tweets = Tweet.latest_by_topic(topic).naked.all

  json tweets
end
