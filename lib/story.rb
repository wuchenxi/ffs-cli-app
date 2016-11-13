class Story
  attr_accessor :title, :author, :summary, :text, :url, :author_url
  def initialize url=nil
    if url!=nil
      @url=url;
      s=Nokogiri::HTML(open(@url))
      r=Story.new
      @title=s.css("#profile_top b").first.text
      @author=s.css("#profile_top a").first.text
      @author_url=s.css("#profile_top a").first.attr("href")
      @summary=s.css("#profile_top div.xcontrast_txt").first.text
     end
  end
  def print_summary
      instance_variables.each{|v| puts v[1..-1]+"\t"+send("#{v[1..-1]}")}
  end
end