class FFs
  attr_accessor :cur_story, :cur_author
  def cli
    while true
      puts "S: story; A: author; Q: quit"
      if @cur_story!=nil && @cur_story.id!=nil
          puts "T: save story text" 
      end
      if @cur_author!=nil && @cur_author.id!=nil
         puts "B: author bio; L: list stories by #{@cur_author.name}" 
      end
      s=gets
      if s[0]=='q' || s[0]=='Q'
         break
      elsif s[0]=='s' || s[0]=='S'         
         @cur_story=Story.new
         puts "Enter story id or url"
         @cur_story.setid(gets).print_summary
         @cur_author=@cur_story.author
         @cur_author.name=@cur_story.author_name
      elsif s[0]=='a' || s[0]=='A'
         puts "Enter author id or url"
      end
    end
  end
end