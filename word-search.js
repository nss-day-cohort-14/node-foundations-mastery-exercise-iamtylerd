#!/usr/bin/env node
'use strict';

const [,, ...args] = process.argv
let param = args[0].toLowerCase()

const fs = require('fs');
var es = require('event-stream')

const limitten = require('./limitten')
const dictWrite = require('./writeOut')

let matches = [];


const { Readable, Transform, Writable } = require('stream')


let dictRead = fs.createReadStream("/usr/share/dict/words")
  .pipe(es.split())
  .pipe(es.map(function (line, cb) {
  	  if (line.toLowerCase().slice(0,param.length) !== param) {
         line = ''
     } else {
       line += '\n'
      }
      cb(null, line)
  }))
  .pipe(limitten)
  .pipe(dictWrite)







