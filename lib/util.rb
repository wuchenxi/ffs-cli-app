def gethtml url
   Nokogiri::HTML(open(url))
end

def get_id id
   id[/([0-9]+)/]
end

class ListItem
  attr_accessor :name, :uri
  def initialize(n,u)
    @name=n;@uri=u
  end
end
