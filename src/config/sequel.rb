require 'sequel'

DB = Sequel.connect("postgres://#{ENV.fetch('POSTGRES_USER')}:#{ENV.fetch('POSTGRES_PASSWORD')}@postgres:5432/tweetch_development")

# FIXME: add migrations plugin
DB.create_table? :tweets do
  primary_key :id

  column :text, String
  column :topic, String
  column :username, String
  column :external_id, :Bignum

  index :external_id
end
