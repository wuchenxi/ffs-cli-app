#!/usr/bin/env ruby

require_relative "../config/environment.rb"

Story.new("https://www.fanfiction.net/s/12110896/11/Fortune-s-Might").print_summary.savetext
FFs.new.cli