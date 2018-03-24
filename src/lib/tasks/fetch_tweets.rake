require_relative '../../config/sidekiq'

namespace :cron do
  desc 'Fetch new tweets from Twitter'
  task :fetch_tweets do
    FetchTweetsWorker.perform_async
  end
end
