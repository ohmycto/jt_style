require 'spree_core'
require 'jt_style_theme_hooks'

module JtStyleTheme
  class Engine < Rails::Engine

    config.autoload_paths += %W(#{config.root}/lib)

    def self.activate
      Dir.glob(File.join(File.dirname(__FILE__), "../app/**/*_decorator*.rb")) do |c|
        Rails.env.production? ? require(c) : load(c)
      end

      if Spree::Config.instance
        Spree::Config.set :products_per_page => 1000
      end

      Image.attachment_definitions[:attachment].merge!({
                                                          :styles => {
                                                            :mini => '40x40>',
                                                            :small => '180x180>',
                                                            :product => '200x200>',
                                                            :large => '600x600>'
                                                           }
                                                       })
    end

    config.to_prepare &method(:activate).to_proc
  end
end

