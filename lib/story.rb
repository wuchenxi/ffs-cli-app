require_relative "./concerns/util"

class Story
  attr_accessor :title, :author, :summary, :id, :author_id, :text
  include Util

  def get_summary
      if no_id? then return nil end
      @id=id
      s=gethtml("https://www.fanfiction.net/s/"+@id+"/1")
      @title=s.css("#profile_top b").first.text
      @author=s.css("#profile_top a").first.text
      author_profile=s.css("#profile_top a").first.attr("href")
      @author_id=author_profile[/([0-9]+)/]
      @summary=s.css("#profile_top div.xcontrast_txt").first.text
      @text=nil
      self
  end

  def print_summary
      if no_id? then return nil end
      if @summary==nil then get_summary end
      instance_variables.each{|v| puts v[1..-1]+"\t"+(send("#{v[1..-1]}")==nil ? "" : send("#{v[1..-1]}"))}
      self
  end

  def gettext
       if no_id? then return nil end
       if @text!=nil then return @text end
       r=""
       pagenum=1
       while true
          s=gethtml("https://www.fanfiction.net/s/"+@id+"/#{pagenum}")
          s.css("#storytext")[0].css("p").each{|e| r+=( e==nil ? "" : e.text); r+="\n\t"}
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
      if no_id? then return nil end
      if @text==nil then get_summary end
      o=File.new("#{author}-#{title}-#{id}.txt","w")
      o.syswrite(gettext)
      self
  end
end