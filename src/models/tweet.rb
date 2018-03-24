require 'dotenv/load'
require_relative '../config/sequel'

class Tweet < Sequel::Model
  TOPICS = %w[nasa healthcare opensource]

  dataset_module do
    def latest_by_topic(topic)
      where(topic: topic).order(Sequel.desc(:id)).limit(10)
    end
  end
end
