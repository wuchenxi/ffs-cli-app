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
      puts "L: List all stories N: select another story by index"
    end
    if @cur!=nil then puts "P: print bio or summary" end
  end

  def self.get_index
    puts "Enter index in the list"
    gets.to_i-1
  end
  
  def self.browse_story
    CAT.each_with_index{|c,i|puts "#{i+1}: #{c}"}
    fd=Scraper.scrap_category(CAT[Cli.get_index])
    fd.each_with_index{|f,i|puts "#{i+1}: #{f.name}"}
    sl=Scraper.scrap_fandom(fd[Cli.get_index].uri)

    "12000000"
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
