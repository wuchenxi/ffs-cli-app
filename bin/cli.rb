#!/usr/bin/env ruby

require_relative "../config/environment.rb"

Story.new("https://www.fanfiction.net/s/12110896/11/Fortune-s-Might").savetext
Story.new("465437").savetext
#Author.new("https://www.fanfiction.net/u/933974/").print_bio.list_stories
FFs.new.cli