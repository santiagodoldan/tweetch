namespace :tweetch do
  desc 'Updates the crontab'
  task :setup_cron do
    sh %{whenever --load-file /var/www/app/src/config/schedule.rb -w}
    sh %{touch /var/log/cron.log /var/log/cron-error.log}
    sh %{chmod 777 /var/log/cron.log /var/log/cron-error.log}
    sh %{/etc/init.d/cron start}
  end
end
