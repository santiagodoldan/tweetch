require_relative '../../../config/sidekiq'
require_relative '../../workers/fetch_tweets_worker'

namespace :cron do
  desc 'Fetch new tweets from Twitter'
  task :fetch_tweets do
    FetchTweetsWorker.perform_async
  end
end
