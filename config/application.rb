require_relative 'boot'

require 'rails/all'

Bundler.require(*Rails.groups)

module DeviseApp
  class Application < Rails::Application
   config.load_defaults 5.2
   config.i18n.default_locale = :ja
  end
end

class Application < Rails::Application

  config.action_mailer.perform_deliveries = true
  config.action_mailer.raise_delivery_errors = true
  config.action_mailer.delivery_method = :smtp
  config.action_mailer.smtp_settings = {
    address: "smtp.gmail.com",
    port: 587,
    user_name: 'kitchen.number@gmail.com',
    password: 'wmrl dwhd zbis nbkp',
  }
  
end