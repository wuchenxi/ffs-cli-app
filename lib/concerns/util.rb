module Util
   def no_id?
     self.id==nil
   end
   
   def initialize id=nil
      self.id=(id==nil ? nil : id[/([0-9]+)/])
   end
   
   def gethtml url
      Nokogiri::HTML(open(url))
   end
end