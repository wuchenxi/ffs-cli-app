class FFs
  attr_accessor :cur_story, :cur_author
  def initialize
     @cur_story=Story.new
     @cur_author=Author.new
  end
  
  def cli
    while true
     begin
      puts "----------------------"
      @cur_story.print_summary
      puts "----------------------"
      @cur_author.print_bio
      puts "----------------------"

      puts "A: new author"
      puts "S: new story"
      puts "L: list author's stories"
      puts "D: keep current story"
      puts "Q: quit"
      puts "----------------------"

      s=gets
      if s[0]=='q' || s[0]=='Q'
         break
      elsif s[0]=='s' || s[0]=='S'
         puts "Enter id or url:"         
         @cur_story=Story.new(gets).get_summary
         @cur_author=@cur_story.author
      elsif s[0]=='a' || s[0]=='A'
         puts "Enter id or url:"
         @cur_author=Story.new(gets)
      elsif s[0]=='D' || s[0]=='d'
         @cur_story.savetext
         puts "Saved."
      elsif s[0]=='L'||s[0]=='l'
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