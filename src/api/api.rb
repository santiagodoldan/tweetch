require 'json'
require 'sinatra'
require "sinatra/json"
require_relative '../models/tweet'

set :port, 8081
set :bind, '0.0.0.0'

before do
  content_type :json
  headers 'Access-Control-Allow-Origin' => '*', 'Access-Control-Allow-Methods' => ['GET']
end

get '/api/v1/tweets', provides: :json do
  topic  = params[:topic] || Tweet::TOPICS.first
  tweets = Tweet.latest_by_topic(topic).naked.all

  json tweets
end
