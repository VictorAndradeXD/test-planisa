# spec/rails_helper.rb
ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../config/environment', __dir__)
abort("The Rails environment is running in production mode!") if Rails.env.production?
require 'rspec/rails'
require 'webmock/rspec'

# Webmock configurado para permitir apenas localhost (bloqueia APIs externas não stubadas)
WebMock.disable_net_connect!(allow_localhost: true)

# Configuração do Shoulda Matchers (para models)
Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end

# Configuração geral do RSpec
RSpec.configure do |config|
  config.use_transactional_fixtures = true

  config.infer_spec_type_from_file_location!

  config.filter_rails_from_backtrace!

  # FactoryBot mais limpo
  config.include FactoryBot::Syntax::Methods
end
