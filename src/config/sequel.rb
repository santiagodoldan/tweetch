require 'sequel'

DB = Sequel.connect(ENV.fetch('DATABASE_URL'))

# FIXME: add migrations plugin
DB.create_table? :tweets do
  primary_key :id

  column :text, String
  column :topic, String
  column :username, String
  column :external_id, :Bignum

  index :external_id
end
