require 'dotenv/load'
require 'sidekiq'

# Load workers
Dir.glob('src/workers/*.rb').each { |r| load r }

redis = { url: ENV.fetch('REDIS_URL') }

Sidekiq.configure_client do |config|
  config.redis = redis
end

Sidekiq.configure_server do |config|
  config.redis = redis
end
