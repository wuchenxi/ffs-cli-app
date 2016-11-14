# ffs-cli-app

A scraper for fanfiction.net.

Usage:

* Interactive CLI:

```Ruby
FFs.new.cli
```

* Saves the fanfic story "Fortune's Might" to a text file and displays information about it.

```Ruby
Story.new("https://www.fanfiction.net/s/12110896/11/Fortune-s-Might").print_summary.savetext
```

* Show the bio and list of stories by author MyMoony

```Ruby
Author.new("https://www.fanfiction.net/u/933974/").print_bio.list_stories
```

./lib/story.rb scaping story data
./lib/author.rb scraping author data
./lib/cli.rb CLI

License: GPL v2
