every 30.minutes do
  runner 'FetchTweetsWorker.new.perform'
end
