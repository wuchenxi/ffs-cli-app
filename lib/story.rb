class Story
  attr_accessor :title, :author, :summary, :id, :author_id, :text
  def initialize id=nil
    if id!=nil
      @id=id
      url="https://www.fanfiction.net/s/"+@id+"/1"
      s=Nokogiri::HTML(open(url))
      @title=s.css("#profile_top b").first.text
      @author=s.css("#profile_top a").first.text
      author_profile=s.css("#profile_top a").first.attr("href")
      @author_id=author_profile[/([0-9]+)/]
      @summary=s.css("#profile_top div.xcontrast_txt").first.text
      @text=nil
     end
  end

  def print_summary
      instance_variables.each{|v| puts v[1..-1]+"\t"+(send("#{v[1..-1]}")==nil ? "" : send("#{v[1..-1]}"))}
  end

  def gettext
       if @id==nil 
         return nil
       end
       if @text!=nil
         return @text
       end
       r=""
       pagenum=1
       while true
          url="https://www.fanfiction.net/s/"+@id+"/#{pagenum}"
          s=Nokogiri::HTML(open(url))
          s.css("#storytext").css("*").each{|e| r+=( e.text==nil ? "" : e.text); r+="\n\t"}
          if s.css("button.btn").any?{|b| b.text=="Next >"}
             pagenum+=1
          else
             break
          end
          r+="\n"
       end
       @text=r
       r 
  end

  def savetext
      if @id==nil
         return nil
      end
      o=File.new("#{author}-#{title}-#{id}.txt","w")
      o.syswrite(gettext)
  end
end