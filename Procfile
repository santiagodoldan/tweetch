api: thin -R config.ru -a 0.0.0.0 -p 8081 start
app: /root/.yarn/bin/yarn run start
sidekiq: rake tweetch:setup_cron_and_sidekiq
