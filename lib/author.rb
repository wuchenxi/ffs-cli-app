class Author 
   attr_accessor :name, :stories, :bio, :id
   @@all=[]
   def initialize i
     @id=get_id(i)
     r=Scraper.scrap_authors(@id).each{|k,v| send("#{k}=",v)}
     if !(@@all.any?{|a| a.id=@id}) then @@all<<self end
   end

   def self.all
     @@all
   end

   def self.clear
     @@all=[]
   end
   
   def print
      puts @name
      puts @bio
      self
   end 
   
   def list_stories
       Cli.display_list(@stories)
       self
   end

end
