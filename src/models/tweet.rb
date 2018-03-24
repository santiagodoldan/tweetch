require 'dotenv/load'
require_relative '../config/sequel'

class Tweet < Sequel::Model
  TOPICS = %w[nasa healthcare opensource]
end
