# ffs-cli-app

A scraper for fanfiction.net.

Usage:

* Interactive CLI:

```Ruby
FFs.new.cli
```

* Saves the fanfic story "Fortune's Might" to a text file and displays information about it.

```Ruby
Story.new("https://www.fanfiction.net/s/12110896/11/Fortune-s-Might").print.savetext
```

* Show the bio and list of stories by author MyMoony

```Ruby
Author.new("https://www.fanfiction.net/u/933974/").print.list_stories
```

./lib/util.rb parent class definition, utilities

./lib/story.rb scaping story data

./lib/author.rb scraping author data

./lib/cli.rb CLI

License: GPL-2.0
