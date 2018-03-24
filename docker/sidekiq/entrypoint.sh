#!/bin/bash

bundle check || bundle install
whenever --load-file /var/www/app/src/config/schedule.rb -w
touch /var/log/cron.log /var/log/cron-error.log
chmod 777 /var/log/cron.log /var/log/cron-error.log
/etc/init.d/cron start

bundle exec "$@"
