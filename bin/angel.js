#!/usr/bin/env node
var fs = require("fs")
var path = require("path")
var Angel = require("../index");

if(!module.parent) {
  var argv = process.argv.splice(2)
  var dnaPath = path.join(process.cwd(), argv[0])
  fs.exists(dnaPath, function(foundDNA){
    var instance
    if(foundDNA) {
      argv.shift() // exclude found dna path
      instance = new Angel(dnaPath)
    }
    else
      instance = new Angel()
    instance.plasma.on("ready", function(){
      instance.do(argv.join(" "), instance.render)
    })
  })
}
