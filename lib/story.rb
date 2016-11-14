require_relative "./concerns/util"

class Story
  attr_accessor :title, :author, :summary, :id, 
     :author_name, :text, :author_id
  include Util

  def get_summary
      if no_id? then return nil end
      @id=id
      s=gethtml("https://www.fanfiction.net/s/"+@id+"/1")
      @title=s.css("#profile_top b").first.text
      @author_name=s.css("#profile_top a").first.text
      @author=Author.new(s.css("#profile_top a").first.attr("href"))
      @author_id=@author.id
      @summary=s.css("#profile_top div.xcontrast_txt").first.text
      @text=nil
      self
  end

  def print_summary
      if no_id? then return self end
      if @summary==nil then get_summary end
      instance_variables.each do |v| 
         if v[1..-1]!="text" && v[1..-1]!="author"
           puts v[1..-1]+"\t"+
             (send(v[1..-1]).is_a?(String) ? send(v[1..-1]) 
           : "")
         end
      end
      self
  end

  def gettext
       if no_id? then return self end
       r=""
       pagenum=1
       while true
          s=gethtml("https://www.fanfiction.net/s/"+@id+"/#{pagenum}")
          s.css("#storytext")[0].css("p").each do |e| 
              r+=( e==nil ? "" : e.text); r+="\n\t"
          end
          if s.css("button.btn").any?{|b| b.text=="Next >"}
             pagenum+=1
          else
             break
          end
          r+="\n"
       end
       @text=r
       self
  end

  def savetext
      if no_id? then return self end
      if @text==nil then gettext end
      if @author_name==nil then get_summary end
      o=File.new("#{@author_name}-#{@title}-#{@id}.txt","w")
      o.syswrite(gettext)
      self
  end
end