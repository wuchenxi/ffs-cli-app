Gem::Specification.new do |s|
  s.name        = 'ffs'
  s.version     = '0.0.2'
  s.date        = '2016-11-19'
  s.summary     = "A scraper for fanfiction.net."
  s.description = "A scraper for fanfiction.net, with cli interface"
  s.authors     = ["Chenxi Wu"]
  s.email       = 'wuchenxi2013@gmail.com'
  s.files       = ["lib/ffs.rb", "lib/author.rb", "lib/cli.rb", "lib/story.rb", "lib/util.rb", "lib/scraper.rb"]
  s.add_runtime_dependency "nokogiri",  '~> 1.8.2', '>= 1.8.2'
  s.homepage    = 'http://rubygems.org/gems/ffsg'
  s.license     = 'GPL-2.0'
end
