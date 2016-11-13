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
