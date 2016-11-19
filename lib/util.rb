def gethtml url
   Nokogiri::HTML(open(url))
end

def get_id id
   id[/([0-9]+)/]
end
