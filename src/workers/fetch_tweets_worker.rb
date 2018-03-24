require 'sidekiq'

class FetchTweetsWorker
  include Sidekiq::Worker

  def perform
    puts 'FetchTweetsWorker.perform'
  end
end
