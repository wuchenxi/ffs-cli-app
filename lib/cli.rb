class Cli
  def cli
    while true
      puts "S: story; A: author; Q: quit"
      s=gets
      if s[0]=='q' || s[0]=='Q'
         break
      elsif s[0]=='s' || s[0]=='S'
         puts "Enter story id or url"
      elsif a[0]=='a' || a[0]=='A'
         puts "Enter author id or url"
      end
    end
  end
end