require_relative "./concerns/util"

class Author
   attr_accessor :name, :id, :stories
   include Util
end