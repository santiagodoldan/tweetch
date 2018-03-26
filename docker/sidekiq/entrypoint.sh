#!/bin/bash

bundle check || bundle install
bundle exec rake tweetch:setup_cron
bundle exec "$@"
