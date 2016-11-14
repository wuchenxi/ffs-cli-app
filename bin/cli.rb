#!/usr/bin/env ruby

require_relative "../config/environment.rb"

Author.new("https://www.fanfiction.net/u/933974/").print_bio.list_stories
FFs.new.cli