namespace :tweetch do
  desc 'Updates the crontab and starts sidekiq'
  task :setup_cron_and_sidekiq do
    Rake::Task['tweetch:setup_cron'].execute
    sh %{sidekiq -r /var/www/app/src/config/sidekiq.rb}
  end
end
