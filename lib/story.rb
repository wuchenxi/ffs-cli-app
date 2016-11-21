class Story 
  attr_accessor :title, :summary, :id,
     :author_name, :text, :author_id
  @@all=[]
  def initialize i
    @id=get_id(i)
    Scraper.scrap_story(@id).each do |k,v|
      send("#{k}=",v)
    end
    if !(@@all.any?{|a| a.id==@id}) then @@all<<self end
  end

  def self.all
     @@all
  end

  def self.clear
     @@all=[]
  end
  
  def print
      instance_variables.each do |v| 
         if v[1..-1]!="text"
           puts v[1..-1]+"\t"+
             (send(v[1..-1]).is_a?(String) ? send(v[1..-1]) 
           : "")
         end
      end
      self
  end

  def gettext
      @text=Scraper.get_text @id
  end

  def savetext
      if @text==nil then gettext end
      #puts @text
      o=File.new("#{@author_name}-#{@title}-#{@id}.txt","w")
      o.syswrite(@text)
      o.close
      self
  end
end
