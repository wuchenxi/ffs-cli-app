class Author < Scrapped_object
   attr_accessor :name, :stories, :bio
   
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
   
   def print
      if no_id? then return self end
      if @bio==nil then get_bio end
      puts @name
      puts @bio
      self
   end 
   
   def get_list
      if no_id? then return self end
      s=gethtml("https://www.fanfiction.net/u/"+@id+"/")
      @stories=[]
      s.css(".mystories a.stitle").each do |title|
         n=Story.new(title.attr("href"))
         n.title=title.text
         @stories<<n
      end
      self
   end
   
   def list_stories
       if no_id? then return self end
       if @stories==nil then get_list end
       @stories.each_with_index do |s, i|
          puts "  #{i+1}: "+s.title
       end
       self
   end

end