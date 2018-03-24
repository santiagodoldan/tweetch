# Load ENV variables to crontab
ENV.each { |k, v| env(k, v) }

set :output, { error: '/var/log/cron-error.log', standard: '/var/log/cron.log' }

every 1.minute do
  rake 'cron:fetch_tweets'
end
