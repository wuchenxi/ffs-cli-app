class Story
  attr_accessor :title
  def self.new_from_url url
    s=Nokogiri::HTML(open(url))
    r=Story.new
    r.title=s.css("#profile_top b").first.text
    r
  end
end