#!/usr/bin/env ruby

require_relative "../config/environment.rb"

a=Story.new_from_url("https://www.fanfiction.net/s/12110896/1/Fortune-s-Might")
puts a.title