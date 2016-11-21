class Scraper
  def self.scrap_story id
    r={}
    s=gethtml("https://www.fanfiction.net/s/"+id+"/1")
    r[:title]=s.css("#profile_top b").first.text
    r[:author_name]=s.css("#profile_top a").first.text
    r[:author_id]=get_id(s.css("#profile_top a").first.attr("href"))
    r[:summary]=s.css("#profile_top div.xcontrast_txt").first.text
    r
  end

  def self.get_text id
    s=gethtml("https://www.fanfiction.net/s/"+id+"/1")
    r=""
    pagenum=1
    while true
       s=gethtml("https://www.fanfiction.net/s/"+id+"/#{pagenum}")
          
       #fallback
       if s.css("#storytext").first.css("p").empty?
           r+=s.css("#storytext").first.text
       else
           s.css("#storytext").first.css("p").each do |e| 
              r+=( e==nil ? "" : e.text); r+="\n\t"
           end
       end
       if s.css("button.btn").any?{|b| b.text=="Next >"}
          pagenum+=1
       else
          break
       end
       r+="\n"
    end
    r
  end

  def self.get_list page, css
    r=[]
    page.css(css).each do |li|
      r << ListItem.new(li.text,li.attr("href"))
    end
    r
  end
  
  def self.scrap_authors id
    r={}
    s=gethtml("https://www.fanfiction.net/u/"+id+"/")
    r[:name]=s.css("#content_wrapper_inner span").first.text
    r[:bio]=""
    s.css("#bio").css("p").each do |p|
      r[:bio]+=p.text; r[:bio]+="\n"
    end
    r[:stories]=Scraper.get_list(s,".mystories a.stitle")
    r
  end
  
  def self.scrap_category cat
    Scraper.get_list(gethtml("https://www.fanfiction.net/#{cat}/"),"#list_output a")
  end

  def self.scrap_fandom fad, page
    r=[]
    Scraper.get_list(gethtml("https://www.fanfiction.net#{fad}?&p=#{page}"),"a.stitle")
  end
end
  
