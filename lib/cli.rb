class FFs
  attr_accessor :cur
  def initialize
     @cur=Scrapped_object.new
  end
  
  def cli
    while true
     begin
      puts ""
      if @cur.is_a?(Story) then puts "Story: "+cur.title end
      if @cur.is_a?(Author) then puts "Author: "+cur.name end

      puts "S: new story A: new author P: display info about current story or author"
      puts "Q: quit D: download current story C: go to the author of current story"
      puts "L: list all stories by the current author" 
      puts "N: select story by current author by index in the list"

      s=gets
      if s[0]=='q' || s[0]=='Q'
         break
      elsif s[0]=='p' || s[0]=='P'      
         @cur.print
      elsif s[0]=='s' || s[0]=='S'
         puts "Enter id or url:"         
         @cur=Story.new(gets).get_summary
      elsif s[0]=='a' || s[0]=='A'
         puts "Enter id or url:"
         @cur=Author.new(gets).get_bio
      elsif s[0]=='D' || s[0]=='d'
         if @cur.is_a?(Story) then @cur.savetext; puts "Saved." end
      elsif s[0]=='L'||s[0]=='l'
         if @cur.is_a?(Author) then @cur.list_stories end
      elsif s[0]=='N'||s[0]=='n'
         if @cur.is_a?(Author)
            puts "Enter story index:"
            n=gets.to_i; @cur=@cur.stories[n-1] 
         end
      elsif s[0]=='C'||s[0]=='c'
         if @cur.is_a?(Story) then @cur=cur.author.get_bio end
      end

      rescue => e
         puts e.message
         #reset     
         @cur=Scrapped_object.new
     end
    end
  end
end