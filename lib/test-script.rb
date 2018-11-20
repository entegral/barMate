#!/usr/bin/ruby

require './BitcoinRPC'

if $0 == __FILE__
  h = BitcoinRPC.new('http://user:password@127.0.0.1:8332')
  p h.getbalance
  p h.getinfo
  p h.getnewaddress
  p h.dumpprivkey( h.getnewaddress )
  # also see: https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_Calls_list
end