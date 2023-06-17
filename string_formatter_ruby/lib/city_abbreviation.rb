require "json"

module  CityAbbreviation
  # get gull name of country in base of input
  def get_full_name_country(abb)
    load_cities[abb] || abb
  end

  # load all names of us country from json file (base route)
  def load_cities 
    # open file and read wit JSON
    file = File.open("./cities.json", 'r')
    data = JSON.load file
    data
  end
end