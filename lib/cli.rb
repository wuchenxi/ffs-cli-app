class FFs
  attr_accessor :cur_story, :cur_author
  def initialize
     @cur_story=Story.new
     @cur_author=Author.new
  end
  
  def cli
    while true
     begin
      puts "A: new author  S: new story  Q: quit"
      puts "L: list all stories/switch to another story by the same author"
      puts "D: download current story  P: display current story and/or author"
      puts "----------------------"

      s=gets
      if s[0]=='q' || s[0]=='Q'
         break
      elsif s[0]=='p' || s[0]=='P'         
         puts "Story-----------------"
         @cur_story.print_summary
         puts "Author----------------"
         @cur_author.print_bio
         puts "----------------------"
      elsif s[0]=='s' || s[0]=='S'
         puts "Enter id or url:"         
         @cur_story=Story.new(gets).get_summary
         @cur_author=@cur_story.author
      elsif s[0]=='a' || s[0]=='A'
         puts "Enter id or url:"
         @cur_author=Author.new(gets).get_bio
      elsif s[0]=='D' || s[0]=='d'
         @cur_story.savetext
         puts "Saved."
      elsif s[0]=='L'||s[0]=='l'
         @cur_author.list_stories
         puts "----------------------"
         puts "Enter new story number (0 for staying at the current story)"
         n=gets.to_i
         if n>0 then @cur_story=@cur_author.stories[n-1] end
      end

      rescue => e
         puts e.message
         #reset
         @cur_story=Story.new
         @cur_author=Author.new
     end
    end
  end
end