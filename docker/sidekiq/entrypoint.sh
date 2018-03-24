#!/bin/bash

bundle check || bundle install
whenever -w
/etc/init.d/cron start

bundle exec "$@"
