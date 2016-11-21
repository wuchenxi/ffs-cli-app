CAT=[:anime,:book,:movie,:misc,:cartoon,:play,:comic,:tv,:game]

class Cli
  attr_accessor :cur
  def initialize
     @cur=nil
  end

  def prompt_user
    #prompt for category
    #category=Scrapper.scrape_category
    
    
    puts "B: Browse stories S: new story by uri/id A: new author by uri/id Q: quit"
    puts "H: print all stories and authors visited X: clear history"
    if @cur.is_a?(Story)
      puts "C: go to the author of current story D: download current story"
    elsif @cur.is_a?(Author)
      puts "L: List all stories by this author N: select another story by index"
    end
    if @cur!=nil then puts "P: print bio or summary" end
  end

  def self.get_index
    puts "Enter index in the list"
    gets.to_i-1
  end

  def self.display_list l
    l.each_with_index{|e,i| puts "#{i+1}: #{e.name}"}
  end
  
  def self.browse_story
    CAT.each_with_index{|c,i|puts "#{i+1}: #{c}"}
    fd=Scraper.scrap_category(CAT[Cli.get_index])
    Cli.display_list(fd)
    page=1
    cfd=Cli.get_index
    sl=Scraper.scrap_fandom(fd[cfd].uri,page)
    i=""
    while(true) do
      Cli.display_list(sl)
      puts "Enter index, n for next page, p for previous page"
      i=gets
      if i[0]=='n'
        page+=1; sl=Scraper.scrap_fandom(fd[cfd].uri,page) 
      elsif i[0]=='p'
        page-=1; sl=Scraper.scrap_fandom(fd[cfd].uri,page)
      else
        return sl[i.to_i-1].uri
      end
    end
  end
  
  def cli
    while true
     begin
      puts ""
      if @cur.is_a?(Story)
        puts "Story: "+cur.title 
      elsif @cur.is_a?(Author)
        puts "Author: "+cur.name
      else
        puts "******"
      end

      prompt_user 

      s=gets
      if s[0]=='q' || s[0]=='Q'
        break
      elsif s[0]=='p' || s[0]=='P'      
        @cur.print
      elsif s[0]=='s' || s[0]=='S'
         puts "Enter id or url:"; @cur=Story.new(gets)
      elsif s[0]=='a' || s[0]=='A'
         puts "Enter id or url:";  @cur=Author.new(gets)
      elsif s[0]=='D' || s[0]=='d'
        @cur.savetext; puts "Saved."
      elsif s[0]=='L'||s[0]=='l'
        @cur.list_stories
      elsif s[0]=='N'||s[0]=='n'
        @cur=Story.new(@cur.stories[Cli.get_index].uri) 
      elsif s[0]=='C'||s[0]=='c'
        @cur=Author.new(@cur.author_id)
      elsif s[0]=='H'||s[0]=='h'
        Story.all.each{|e| puts e.title+" "+e.id}
        Author.all.each{|e| puts e.name+" "+e.id}
      elsif s[0]=='X'||s[0]=='x'
        Story.clear; Author.clear;
      elsif s[0]=='B'||s[0]=='b'
        @cur=Story.new(Cli.browse_story)
      end

      rescue => e
         puts e.message
         #reset     
         @cur=nil; Story.clear; Author.clear
     end
    end
  end
end
