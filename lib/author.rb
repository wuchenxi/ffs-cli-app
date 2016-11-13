require_relative "./concerns/util"

class Author
   attr_accessor :name, :id, :stories, :bio
   include Util
   
   def get_bio
      if no_id? then return nil end
      @id=id
      s=gethtml("https://www.fanfiction.net/u/"+@id+"/")
      @name=s.css("#content_wrapper_inner span").first.text
      r=""
      s.css("#bio").css("p").each{|p| r+=p.text; r+="\n"}
      @bio=r
   end
   
   def print_bio
      if no_id? then return nil end
      if @bio==nil then get_bio end
      puts @name
      puts @bio
   end 
   
   def getstories
   end

end