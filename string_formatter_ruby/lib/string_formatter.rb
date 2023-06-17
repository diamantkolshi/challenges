require 'date'
require_relative 'city_abbreviation'

class StringFormatter
  # include method to displayu full name of counry from module
  include CityAbbreviation

  # initalize string
  def initialize(string)
    @string = string
  end

  # convert string to normalize format
  def normalize
    case @string
    when /,/
      # change comma with space
      @string.gsub(',', '').gsub(/\s+/, ' ')
    when /\$/
      # Seperate string on different vars
      city_abb, birthdate, last_name, first_name = @string.split('$').map(&:strip)
      parsed_date = Date.strptime(birthdate, '%d-%m-%Y')
      "#{first_name} #{get_full_name_country(city_abb)} #{parsed_date.strftime('%-d/%-m/%Y')}"
    end
  end
end