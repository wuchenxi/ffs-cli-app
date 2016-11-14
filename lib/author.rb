require_relative "./concerns/util"

class Author
   attr_accessor :name, :id, :stories, :bio
   include Util
   
   def get_bio
      if no_id? then return self end
      @id=id
      s=gethtml("https://www.fanfiction.net/u/"+@id+"/")
      @name=s.css("#content_wrapper_inner span").first.text
      r=""
      s.css("#bio").css("p").each{|p| r+=p.text; r+="\n"}
      @bio=r
      self
   end
   
   def print_bio
      if no_id? then return self end
      if @bio==nil then get_bio end
      puts @name
      puts @bio
      self
   end 
   
   def get_list
   end
   
   def list_stories
   end

end